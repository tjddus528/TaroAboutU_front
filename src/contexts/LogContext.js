import React from 'react';
import {createContext, useState, useRef,useEffect} from 'react';
import uuid from 'react-native-uuid';
import logsStorage from '../storage/logsStorage';
import YNStorage from '../storage/YNStorage';
import LoveStorage from '../storage/LoveStorage';
import TodayStorage from '../storage/TodayStorage';
import MindStorage from '../storage/MindStorage';

const LogContext = createContext();

export function LogContextProvider({children}) {
  const initialLogsRef = useRef(null);
  const initialYNRef = useRef(null);
  const initialLoveRef = useRef(null);
  const initialTodayRef = useRef(null);
  const initialMindRef = useRef(null);
  const [logs, setLogs] = useState([]);
      // Yes / No
  const [invenYN,setInvenYN] = useState([
  ]);
  const invenYNCreate = ({cardTitle, cardImg, cardText, date}) => {
    const YN = {
      id: uuid.v4(),
      cardTitle,
      cardImg,cardText,
      date,
    };
    setInvenYN([YN, ...invenYN]);
  };
  // today--
  const [invenToday,setInvenToday] = useState([]);
  const invenTodayCreate = ({cardTitle, cardImg, cardText, date}) => {
    const Today = {
      id: uuid.v4(),
      cardTitle,
      cardImg,cardText,
      date,
    };
    setInvenToday([Today, ...invenToday]);
  };
  // Love
  const [invenLove,setInvenLove] = useState([]);
  const invenLoveCreate = ({cardTitle, cardImg, cardText, date}) => {
    const Love = {
      id: uuid.v4(),
      cardTitle,
      cardImg,cardText,
      date,
    };
    setInvenLove([Love, ...invenLove]);
  };

  // Mind
  const [invenMind,setInvenMind] = useState([]);
  const invenMindCreate = ({card1Title,card2Title,card3Title, card1Img,card2Img,card3Img, cardText, date}) => {
    const Mind = {
      id: uuid.v4(),
      card3Title,
      card3Img,
      card1Title,
      card1Img,
      card2Title,
      card2Img,cardText,
      date,
    };
    setInvenMind([Mind, ...invenMind]);
  };
  // to


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

  //diary 저장
  useEffect(() => {
    (async () => {
      const savedLogs = await logsStorage.get();
      if (savedLogs) {
        initialLogsRef.current = savedLogs;
        setLogs(savedLogs);
      }

    })();
  }, []);

  useEffect(() => {
    if (logs === initialLogsRef.current) {
      return;
    }
    logsStorage.set(logs);
  }, [logs]);

  //yes or no 저장
  useEffect(() => {
    // useEffect 내에서 async 함수를 만들고 바로 호출
    // IIFE 패턴
    (async () => {
      const savedYN = await YNStorage.get();
      if (savedYN) {
        initialYNRef.current = savedYN;
        setInvenYN(savedYN);
      }
    })();
  }, []);

  useEffect(() => {
    if (invenYN === initialYNRef.current) {
      return;
    }
    YNStorage.set(invenYN);
  }, [invenYN]);

  // love 저장
  useEffect(() => {
    // useEffect 내에서 async 함수를 만들고 바로 호출
    // IIFE 패턴
    (async () => {
      const savedLove = await LoveStorage.get();
      if (savedLove) {
        initialLoveRef.current = savedLove;
        setInvenLove(savedLove);
      }
    })();
  }, []);

  useEffect(() => {
    if (invenLove === initialLoveRef.current) {
      return;
    }
    LoveStorage.set(invenLove);
  }, [invenLove]);

  // today
  useEffect(() => {
    // useEffect 내에서 async 함수를 만들고 바로 호출
    // IIFE 패턴
    (async () => {
      const savedToday = await TodayStorage.get();
      if (savedToday) {
        initialTodayRef.current = savedToday;
        setInvenToday(savedToday);
      }
    })();
  }, []);

  useEffect(() => {
    if (invenToday === initialTodayRef.current) {
      return;
    }
    TodayStorage.set(invenToday);
  }, [invenToday]);

  //mind
  useEffect(() => {
    // useEffect 내에서 async 함수를 만들고 바로 호출
    // IIFE 패턴
    (async () => {
      const savedMind = await MindStorage.get();
      if (savedMind) {
        initialMindRef.current = savedMind;
        setInvenMind(savedMind);
      }
    })();
  }, []);

  useEffect(() => {
    if (invenMind === initialMindRef.current) {
      return;
    }
    MindStorage.set(invenMind);
  }, [invenMind]);

  return (
    <LogContext.Provider
     value={{logs, onCreate, onModify,onRemove,
     invenYN,invenToday,invenLove,invenMind,
     invenYNCreate,invenLoveCreate,invenMindCreate,invenTodayCreate}}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;