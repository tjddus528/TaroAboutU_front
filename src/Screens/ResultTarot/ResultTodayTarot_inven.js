import React,{useContext, useState, useEffect} from 'react';
import {View, Text,Button, StyleSheet,Image,TouchableOpacity,ImageBackground,ScrollView, FlatList,onScrolledToBottom} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import LogContext from '../../contexts/LogContext';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

function ResultTodayTarot_inven({route}){
    const {invenToday} = useContext(LogContext);
    
    const date = route.params.date;
    const currentDate = route.params.currentDate;
    const navigation = useNavigation();
    const filteredLogs = invenToday.filter(
        () => currentDate === date,
    );
    const lastValue = filteredLogs[0];
     // api 불러오기
     const [response, setResponse] = useState(null);
     useEffect(() => {
         const userId = 1; //temp
         axios
         .get(`https://csyserver.shop/inventory/tarot/${userId}?questionId=2&date=${date}`)
         .then((res) => {
             setResponse(res.data.result);
         }).catch((error)=>{
             console.log(error);
         })
     }, []);
 
     const onScroll = (e) => {
         if (!onScrolledToBottom) {
             return;
           }
         const {contentSize, layoutMeasurement, contentOffset} = e.nativeEvent;
         const distanceFromBottom =
           contentSize.height - layoutMeasurement.height - contentOffset.y;
     
         if (distanceFromBottom < 72) {
           onScrolledToBottom(true);
         } else {
           onScrolledToBottom(false);
         }
       };
 
 
     const renderItem = ({ item,index }) => (
         <View style={styles.block}>
             <TouchableOpacity
                 onPress={()=>{
                     console.log(item.tarotId);
                     navigation.navigate('ResultTodayTarot', {
                         cardId: item.tarotId, 
                         isSaved: true
                     });
                 }}>
             <View class="resultItem" style={styles.resultItem}>
                 <Text style={styles.index}>{index}</Text>
                 <Text style={styles.title}>{item.tarotName_e}</Text>
                 {/* <Image style={{width:40, height:40}} source={item.tarotUrlImage}/> */}
             </View>
             </TouchableOpacity>
         </View>
       );
       return(
        <View style={styles.container}>
            <ImageBackground source={require('../../img/background.png')} style={{width:"100%",height:"102%",top:-20}}>
                <View></View>
                    <View style={styles.result}>
                        <Text style={{color:"blanchedalmond",fontSize:30,marginBottom:-20,marginTop:90}}>오늘의 타로</Text>
                        <Text style={{color:"white", marginTop:30, fontSize: 20, color: "white"}}>{date}</Text>
                    </View>
                    <ScrollView style={{flex:1}}>
                    {<View style={styles.resulttext}>
                        <FlatList
                            data={response}
                            renderItem={renderItem}
                            keyExtractor={item => item.pickId}
                            onScroll={onScroll}
                        />
                    </View>}
                    <View style={{alignItems:"center",flex:1}}>
                        <TouchableOpacity onPress={()=> {navigation.pop()}}>
                            <View style={styles.goTab}><Icon name="inventory" size={24} style={{color:"white"}}/>
                            <Text style={styles.gotext}>보관함으로 돌아가기</Text></View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View style={{flex:0.2}}></View>
            </ImageBackground>
        </View>
    );
}

export default ResultTodayTarot_inven;


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    resultItem: {
        padding: 20,
        borderWidth: 1, 
        borderColor:"white",
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection:"row",
    },
    result:{
        //flex:1.3,
        alignItems:"center",
        flexDirection:"column",
        justifyContent:"center",
    },
    resulttext:{
        // flex:4,
        // alignItems:"center",
        marginRight: 30,
        marginLeft: 30,
        marginBottom:30,
        marginTop: 40,
    },
    goTab:{
        borderColor:"white",
        borderWidth:1,
        borderRadius:5,
        marginBottom:15,
        width:180,
        height:35,
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
    },
    gotext:{
        color:"white",
        paddingLeft:10,
    },
    block: {
        flex: 1, 
        width:"90%",
        marginLeft:20,
        marginBottom:10,
        paddingBottom: 20,
        borderColor:"white",
    },
    title: {
        marginTop:8,
        color:"white",
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    index:{
        marginRight:16,
        justifyContent:"center",
        borderRightColor:"white",
        borderRightWidth:1,
        paddingRight:18,
        color:"white",
        fontSize:25,

    }

});
