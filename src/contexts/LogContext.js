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
      // Yes / No
  const invenYN = {
    id: uuid.v4(),
    cardTitle: 'Yes or No Card',
    cardImg: require("../img/card.png"),
    cardText: 'Yes or No cardText',
  };
  // today--
  const [invenToday,setInvenToday] = useState({
    id: uuid.v4(),
    cardTitle: 'Today Card',
    cardImg: require("../img/card.png"),
    cardText: 'Today cardText',
  });
  // Love
  const [invenLove,setInvenLove] = useState({
    id: uuid.v4(),
    cardTitle: 'Love Card',
    cardImg: require("../img/card.png"),
    cardText: 'Love cardText',
  });

  // Mind
  const [invenMind,setInvenMind] = useState({
    id: uuid.v4(),
    card1Title: 'Mind Card1',
    card1Img: require("../img/card.png"),
    card2Title: 'Mind Card2',
    card2Img: require("../img/card.png"),
    card3Title: 'Mind Card3',
    card3Img: require("../img/card.png"),
    text: 'Mind cardText3',
  });


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
    <LogContext.Provider value={{logs, onCreate, onModify,onRemove,invenYN,invenToday,invenLove,invenMind}}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;