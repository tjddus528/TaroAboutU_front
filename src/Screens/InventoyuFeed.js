import React,{useContext, useState, useEffect} from 'react';
import {StyleSheet, View,Text,Image,TouchableOpacity} from 'react-native';
import InventoryList from '../components/InventoryList';
import First from '../components/storageCard/Frist';
import LogContext from '../contexts/LogContext';
import Second from '../components/storageCard/Second';
import Third from '../components/storageCard/Third';
import Forth from '../components/storageCard/Forth';
import DatePicker from 'react-native-date-picker'
import Icon from 'react-native-vector-icons/MaterialIcons';
import {format} from 'date-fns';
import axios from 'axios';

function InventoryFeed() {
    const baseUrl = 'https://csyserver.shop';

    const {invenYN} = useContext(LogContext);
    const {invenLove} = useContext(LogContext);
    const {invenMind} = useContext(LogContext);
    const {invenToday} = useContext(LogContext);
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const today = () => {
        let todayMonth = date.getMonth() +1;
        let todayYear = date.getFullYear();
        let todayday = date.getDate();
        const month = ['January','Febuary',"March","April","May","June","July",
        "August","September","October","November","December"];
        let TodayMonth=month[todayMonth-1]
        return todayYear + ' | ' + TodayMonth +' | ' + todayday; 
    }
    const currentDate = format(date, 'yyyy-MM-dd');
    // console.log("start");
    // console.log(JSON.stringify(invenYN, null, 2));
    // console.log(JSON.stringify(invenToday, null, 2));
    // console.log(JSON.stringify(invenLove, null, 2));
    // console.log(JSON.stringify(invenMind, null, 2));


    const [response, setResponse] = useState({});
    //보관한 타로결과 가져오기
    useEffect(()=>{
        const userId = 1; //temp
        const url = `${baseUrl}/inventory?userId=${userId}`;
        axios
        .get(url)
        .then((res) => {
            setResponse(res.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[response]); 

    //날짜별, 질문별 타로결과 정리
    function parseTarotResult() {
        const results = response?.result; // 타로결과 리스트
        const todayResult = results?.filter(result=>result.pickDate.includes(currentDate)); //선택한 날짜결과만 filtering
        // 타로종류별 정리
        const yesNoTarots = todayResult?.filter(result=>result.questionId==1);
        const todayTarots = todayResult?.filter(result=>result.questionId==2);
        const loveTarots = todayResult?.filter(result=>result.questionId==3);
        const mindTarots = todayResult?.filter(result=>result.questionId==4);
        
        const resultExist = todayResult?.length == 0 ? false : true;
        return (
            <View style={styles.contentView}>
                <First invenYN={invenYN} isExist={yesNoTarots?.length!=0}
                currentDate = {currentDate}/>
                <Second invenToday={invenToday} isExist={todayTarots?.length!=0}
                currentDate = {currentDate}/>
                <Third invenLove={invenLove} isExist={loveTarots?.length!=0}
                currentDate = {currentDate}/>
                <Forth invenMind={invenMind} isExist={mindTarots?.length!=0}
                currentDate = {currentDate}/>
            </View>
        )
    }

    return (
    <View style={styles.block}>
        <View style={styles.top}>
            <View style={styles.topheader}>
                <Text style={styles.headtext}>Taro storage</Text>
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
            <View style={styles.topdate}>
                <Image source={require('../img/Purpleline.png')} style={{width:350}}/>
                <Text style={styles.topdatetext}>{today()}</Text>
                <Image source={require('../img/Purpleline.png')} style={{width:350,}}/>
            </View>
            {parseTarotResult()}
        </View>
    </View>
  );
  
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
        backgroundColor:"#030303",
    },
    top:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    icon:{
        right:-80,
        color:"white",
    },
    topheader:{
        flex:0.6,
        flexDirection:"row",
        width:350,
        alignItems:"flex-end",
        justifyContent:"center",
        marginBottom:15,
    },
    contentView:{
        flex:5,
        alignItems:"center",
        paddingTop:10,
    },
    headtext:{
        fontSize:28,
        color:"white",
    },topdate:{
        flex:0.8,
        height:30,
        // backgroundColor:"red",
    
        justifyContent:"center",
        
    },topdatetext:{
        color:"white",
        fontSize:27,
        paddingVertical:13,
        left:10,
    },
});

export default InventoryFeed;