import React from 'react';
import {createContext, useState} from 'react';
import uuid from 'react-native-uuid';

const LogContext = createContext();

export function LogContextProvider({children}) {
  const [logs, setLogs] = useState(
    Array.from({length: 10})
      .map((_, index) => ({
        id: uuid.v4(),
        title: `Log ${index}`,
        body: `Log ${index}`,
        date: new Date().toISOString(),
      }))
      .reverse(),
  );

  const [inven,setInven] = useState(
    Array.from({length: 1})
      .map((_, index) => ({
        id: uuid.v4(),
        cardTitle: `Log ${index}`,
        cardImg: `Log ${index}`,
      }))
      .reverse(),
  );

  const onCreate = ({title, body, date}) => {
    const log = {
      id: uuid.v4(),
      title,
      body,
      date,
    };
    setLogs([log, ...logs]);
  };
  const onModify = (modified) => {
    // logs 배열을 순회해 id가 일치하면 log를 교체하고 그렇지 않으면 유지
    const nextLogs = logs.map((log) =>
      log.id === modified.id ? modified : log,
    );
    setLogs(nextLogs);
  };
  const onRemove = (id) => {
    const nextLogs = logs.filter((log) => log.id !== id);
    setLogs(nextLogs);
  };
  return (
    <LogContext.Provider value={{logs, onCreate, onModify,onRemove,inven}}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;