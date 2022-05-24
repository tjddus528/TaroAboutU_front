import React,{useContext,useState} from 'react';
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

function InventoryFeed() {
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
    console.log("start");
    console.log(JSON.stringify(invenYN, null, 2));
    console.log(JSON.stringify(invenToday, null, 2));
    console.log(JSON.stringify(invenLove, null, 2));
    console.log(JSON.stringify(invenMind, null, 2));
    return (
    <View style={styles.block}>
        <View style={styles.top}>
            <View style={styles.topheader}>
                <Text style={styles.headtext}>Taro storage</Text>
                <TouchableOpacity onPress={() => setOpen(true)}><Icon name="calendar-today" size={24} style={styles.icon} /></TouchableOpacity>
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
            <View>
            <First invenYN={invenYN} 
            currentDate = {format(date, 'yyyy-MM-dd')}
            />
            <Second invenToday={invenToday}
            currentDate = {format(date, 'yyyy-MM-dd')}/>
            <Third invenLove={invenLove}
            currentDate = {format(date, 'yyyy-MM-dd')}/>
            <Forth invenMind={invenMind}
            currentDate = {format(date, 'yyyy-MM-dd')}/>
        </View>
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
        flex:1.2,
        flexDirection:"row",
        width:350,
        alignItems:"flex-end",
        justifyContent:"center",
        marginBottom:15,
    },
    contentView:{
        flex:3.5,
        alignItems:"center",
        paddingTop:30,
    },
    headtext:{
        fontSize:28,
        color:"white",
    },topdate:{
        flex:1,
        height:30,
        
        justifyContent:"center",
        
    },topdatetext:{
        color:"white",
        fontSize:33,
        paddingVertical:13,
        left:10,
    },
});

export default InventoryFeed;