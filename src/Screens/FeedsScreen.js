import React,{useContext,useState} from 'react';
import {StyleSheet, View,Text} from 'react-native';
import FloatingWriteButton from '../components/FloatingWriteButton';
import LogContext from '../contexts/LogContext';
import FeedList from '../components/FeedList';

export const today = () => {
  let now = new Date();
  let todayMonth = now.getMonth() +1;
  let todayYear = now.getFullYear();
  const month = ['January','Febuary',"March","April","May","June","July",
  "August","September","October","November","December"];
  let TodayMonth=month[todayMonth-1]
  return todayYear + ' | ' + TodayMonth; 
}

function FeedsScreen() {
    const {logs} = useContext(LogContext);
  const [hidden, setHidden] = useState(false);
  const onScrolledToBottom = (isBottom) => {
    if (hidden !== isBottom) {
      setHidden(isBottom);
    }
  };

  return (
    <View style={styles.block}>
      <View style={styles.day}>
                <Text style = {styles.dayText}>{today()}</Text>
      </View>
            <FloatingWriteButton hidden={hidden}/>
      <FeedList logs={logs} onScrolledToBottom={onScrolledToBottom} />
      
    </View>
  );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
        backgroundColor:"#030303",
    },
    day:{
      flex :0.2,
      justifyContent:"center",
      marginLeft:30,
      
  },
  dayText:{
    fontSize:30,
    color:"white",
    paddingTop:50
    
},
});

export default FeedsScreen;