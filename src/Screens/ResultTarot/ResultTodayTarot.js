import React, {useContext,useState,useEffect} from 'react';
import {View, Text,Button, StyleSheet,Image,TouchableOpacity,ImageBackground,ScrollView} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import LogContext from '../../contexts/LogContext';
import {format} from 'date-fns';
import axios from 'axios';

function ResultTodayTarot({route, navigation}){
    const invenToday=useContext(LogContext);
    const baseUrl = 'https://csyserver.shop';
    // const baseUrl = 'http://10.0.2.2:3000';
    const cardId = route.params.cardId;

    // api 불러오기
    const [card, setcard] = useState(null);
    const [imgurl, setimgurl] = useState(null);
    const [text, settext] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
        try {
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            setError(null);
            setcard(null);
            settext(null);
            setimgurl(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);
            const response = await axios.get(`https://csyserver.shop/cards/tarot/${cardId}`);
            setcard(response.data.result.tarotName_e); 
            settext(response.data.result.todayTarot);
            setimgurl(response.data.result.tarotUrlImage);
        } catch (e) {
            setError(e);
        }
        setLoading(false);
        };

        fetchUsers();
    }, []);
    console.log(card);  
    const cardTitle=card;
    var url=imgurl;
    var cardText=text;
    const cardImg = require(`../../../TarotCardImg/TheMoon.png`);
    const date = format(new Date(), 'yyyy-MM-dd');
    
    const {invenTodayCreate} = useContext(LogContext);
    const onSave = () => {
        invenTodayCreate({
            cardTitle,
            cardImg,cardText,
            date
        });
        // console.log(JSON.stringify(invenToday, null, 2));
        navigation.navigate('MainTab');
    };
    const onSave2 = () => {
        invenTodayCreate({
            cardTitle,
            cardImg,cardText,
            date
        });
        navigation.navigate('Write2');
    };

    // 타로결과 저장함수
    function saveResult() {
        const userId = 1; //temp
        const url = `${baseUrl}/inventory/result/${userId}`;
        const pickDate = format(new Date(), 'yyyy-MM-dd');
        const postTaroResultData = {
            questionId : 2,
            oneOrSet: 'one',
            tarotId : cardId,
            setId : null,
            pickDate : pickDate
        };
        axios.post(url, postTaroResultData)
        .then((response) => {
            console.log(response.data);
        }).catch((error)=>{
            console.log(error);
        })
    };
    return(
        <View style={styles.container}>
            <ImageBackground source={require('../../img/background.png')} style={{width:"100%",height:"102%",top:-10}}>
                <View style={{flex:0.1}}></View>
            <ScrollView style={{flex:2}}>
            <View style={{flex:0.1}}></View>
            
                <View style={styles.result}>
                <Text style={{color:"blanchedalmond",bottom:-50,fontSize:30,marginBottom:-20}}>오늘의 타로</Text>
                    <Text style={{color:"white", fontSize:23, top:90}}>{cardTitle}</Text>
                    <Image source={cardImg} style={styles.cardImg}/>
                </View>
                
                <View style={styles.resulttext}><Text
                style={{color:"white", width:300, fontSize:15}}>{cardText}
            </Text>
            
            </View>
            <View style={{alignItems:"center",flex:1}}>
                <TouchableOpacity onPress={onSave2}>
                    <View style={styles.goTab}>
                        <Image source={require('../../img/iconDiary.png')}/>
                        <Text style={styles.gotext}>타로 다이어리 쓰기</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    onSave()
                    saveResult()
                }}>
                    <View style={styles.goTab}>
                        <Icon name="inventory" size={24} style={{color:"white"}}/>
                        <Text style={styles.gotext}>보관함에 저장하기</Text>
                    </View>
                </TouchableOpacity>
            </View>
            </ScrollView>
            <View style={{flex:0.2}}></View>
            </ImageBackground>
        </View>
    );
}

export default ResultTodayTarot;


const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    result:{
        flex:1.3,
        alignItems:"center",
        flexDirection:"column",
        justifyContent:"center",
        // backgroundColor:"red"
       
    },
    cardImg:{
        width:191/1.5,
        height:321/1.5,
        marginTop:100, 
        
    },
    resulttext:{
        flex:4,
        alignItems:"center",
        marginBottom:30,
        marginTop:20,
        
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
    }
    
});
