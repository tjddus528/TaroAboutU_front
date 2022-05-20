import First from '../components/storageCard/Frist';
import LogContext from '../contexts/LogContext';
import Second from '../components/storageCard/Second';
import Third from '../components/storageCard/Third';
import Forth from '../components/storageCard/Forth';
import {StyleSheet, View,Text,Image,TouchableOpacity} from 'react-native';
import React,{useContext,useState} from 'react';

function InventoryList() {
    const {invenYN} = useContext(LogContext);
    const {invenLove} = useContext(LogContext);
    const {invenMind} = useContext(LogContext);
    const {invenToday} = useContext(LogContext);
    console.log
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
    console.log(date);
    console.log(invenYN.date);
    
    
  return (
        <View style={styles.contentView}>
            <First style={{backgroundColor:"red"}} invenYN={invenYN} />
            <Second invenToday={invenToday}/>
            <Third invenLove={invenLove}/>
            <Forth invenMind={invenMind}/>
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

export default InventoryList;