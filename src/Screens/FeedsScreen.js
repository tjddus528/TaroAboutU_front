import React,{useContext,useState,useEffect,useCallback} from 'react';
import {StyleSheet, View,Text,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FloatingWriteButton from '../components/FloatingWriteButton';
import FeedList from '../components/FeedList';
import axios from 'axios';
import DatePicker from 'react-native-date-picker'

function FeedsScreen() {
  const [hidden, setHidden] = useState(false);
  const onScrolledToBottom = (isBottom) => {
    if (hidden !== isBottom) {
      setHidden(isBottom);
    }
  };

  // 저장되어있는 다이어리 조회
  const baseUrl = 'https://csyserver.shop';
  const [response, setResponse] = useState({});
  const userId = 1; 
  useEffect(()=>{
    const url = `${baseUrl}/diary?userId=${userId}`;
    axios
    .get(url)
    .then((res) => {
        setResponse(res.data);
    })
    .catch((error)=>{
        console.log(error);
    })
    
  },[]); 

  

  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  var changeDate;
  const showPicker = useCallback((value) => setShow(value), []);
  const onValueChange = useCallback(
    (event, newDate) => {
      const selectedDate = newDate || date;

      showPicker(false);
      setDate(selectedDate);
    },
    [date, showPicker],
    changeDate= (date).getFullYear() + '-' + ('0' + ((date).getMonth() + 1)).slice(-2), // date picker로 설정한 년도와 달
    
  )

  // 다이어리 결과
  const result=response.result;
  const List2 = (result)?.filter(result=>(String(result.createDate).substring(0,7)==String(changeDate)));
  const [open, setOpen] = useState(false);
  const today = () => {
    let todayMonth = date.getMonth() +1;
    let todayYear = date.getFullYear();
    const month = ['January','Febuary',"March","April","May","June","July",
    "August","September","October","November","December"];
    let TodayMonth=month[todayMonth-1]
    return todayYear + ' | ' + TodayMonth ; 
  }


  return (
    <View style={styles.block}>
      <View style={styles.day}>
        <Text style = {styles.dayText}>{today()}</Text>
        <TouchableOpacity onPress={() => setOpen(true)}>
                    <Icon name="calendar-today" size={24} style={styles.icon} />
                </TouchableOpacity>
                <DatePicker
                    modal
                    open={open}
                    date={date}
                    mode="date"
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}/>
      </View>
      <FloatingWriteButton hidden={hidden}/>
      <FeedList logs={List2} onScrolledToBottom={onScrolledToBottom}  />
      
    </View>
  );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
        backgroundColor:"#030303",
    },
    day:{
      borderBottomColor:"white",
      borderWidth:1,
      flex :0.17,
      justifyContent:"space-between",
      flexDirection:"row",
      alignItems:"flex-end",
      paddingBottom:15,
      marginBottom:4,
  },
  dayText:{
    paddingLeft:10,
    fontSize:35,
    color:"white",
    },
    icon:{
      right:30,
      color:"white",
  },
});

export default FeedsScreen;