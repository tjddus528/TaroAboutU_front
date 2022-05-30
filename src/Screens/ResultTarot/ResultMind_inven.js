import React,{useContext, useState, useEffect} from 'react';
import {View, Text,Button, StyleSheet,Image,TouchableOpacity,ImageBackground,ScrollView,FlatList,onScrolledToBottom} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import LogContext from '../../contexts/LogContext';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

function ResultMind_inven({route}){
    const {invenMind} = useContext(LogContext);
    // console.log(JSON.stringify(invenMind, null, 2));
    const date = route.params.date;
    const currentDate = route.params.currentDate;
    const navigation = useNavigation();
    const filteredLogs = invenMind.filter(
        () => currentDate===date,
    );
    const lastValue = filteredLogs[0];
    // api 불러오기
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const userId = 1; //temp
        axios
        .get(`https://csyserver.shop/inventory/set/${userId}?questionId=4&date=${date}`)
        .then((res) => {
            setResponse(res.data.result);
        })
        .catch((error)=>{
            console.log(error);
        })
        // console.log(response)
    }, []);
    console.log(response);

    const [c1, setc1] = useState(null);
    const [c2, setc2] = useState(null);
    const [c3, setc3] = useState(null);
    const [card1, setcard1] = useState(null);
    const [card2, setcard2] = useState(null);
    const [card3, setcard3] = useState(null);
    useEffect(()=>{
        const setId = response.setId;
        axios
        .get(`https://csyserver.shop/cards/set/${setId}`)
        .then((res) => {
            setc1(JSON.parse(res.data.result.setInfo).first);
            setc2(JSON.parse(res.data.result.setInfo).last);
            setc3(JSON.parse(res.data.result.setInfo).middle);
        })
        .catch((error)=>{
            console.log(error);
        })
    }, []);

    axios.get(`https://csyserver.shop/cards/tarot/${c1}`)
        .then(function(response1) {
            setcard1(response1.data.result.tarotName_e); 
        })
        .catch(function(error) {
            console.log("실패");
        })
    axios.get(`https://csyserver.shop/cards/tarot/${c2}`)
    .then(function(response2) {
        setcard2(response2.data.result.tarotName_e); 
        
    })
    .catch(function(error) {
        console.log("실패");
    })
    axios.get(`https://csyserver.shop/cards/tarot/${c3}`)
    .then(function(response3) {
        setcard3(response3.data.result.tarotName_e); 
    })
    .catch(function(error) {
        console.log("실패");
    })

    
    console.log("c1,c2,c3");
    console.log(c1);
    console.log(c2);
    console.log(c3);
    

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
      
      function f({item}){
          const info=(item.mindTarot).substring(0,15);
          
          return info+' ...';
      }

    const renderItem = ({ item,index }) => (
        <View style={styles.block}>
            <TouchableOpacity
                onPress={()=>{
                    // console.log(item.setId);
                    navigation.navigate('ResultMind', {
                        setId: item.setId, 
                        isSaved: true
                    });
                }}>
            <View class="resultItem" style={styles.resultItem}>
                <Text style={styles.index}>{index}</Text>
                <Text style={styles.title}>{f({item})}</Text>
                {/* <Image style={{width:40, height:40}} source={item.tarotUrlImage}/> */}
            </View>
            </TouchableOpacity>
        </View>
      );
      return(
       <View style={styles.container}>
           <ImageBackground source={require('../../img/background.png')} style={{width:"100%",height:"102%",top:-20}}>
               <ScrollView style={{flex:2}}>
                   <View style={styles.result}>
                       <Text style={{color:"blanchedalmond",fontSize:30,marginBottom:-20,marginTop:90}}>마음 타로</Text>
                       <Text style={{color:"white", marginTop:30, fontSize: 20, color: "white"}}>{date}</Text>
                   </View>
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

export default ResultMind_inven;


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    resultItem: {
        // padding: 10,
        borderWidth: 1, 
        borderColor:"white",
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection:"row",
    },
    result:{
        flex:1.3,
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
