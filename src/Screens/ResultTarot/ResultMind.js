import React,{useContext,useState,useEffect} from 'react';
import {View, Text,Button, StyleSheet,Image,TouchableOpacity,ImageBackground,ScrollView} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import LogContext from '../../contexts/LogContext';
import {format} from 'date-fns';
import axios from 'axios';

function ResultMind({route, navigation}){
    const invenMind=useContext(LogContext);
<<<<<<< HEAD
    // api 불러오기
    const randomId = Math.floor(Math.random()*61)+2;
    const [card1, setcard1] = useState(null);
    const [card2, setcard2] = useState(null);
    const [card3, setcard3] = useState(null);
    const [imgurl1, setimgurl1] = useState(null);
    const [imgurl2, setimgurl2] = useState(null);
    const [imgurl3, setimgurl3] = useState(null);
    const [text, settext] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [c1, setc1] = useState(null);
    const [c2, setc2] = useState(null);
    const [c3, setc3] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
        try {
            setError(null);
            setc1(null);
            setc2(null);
            setc3(null);
            settext(null);
            setcard1(null);
            setimgurl1(null);
            setcard2(null);
            setimgurl2(null);
            setcard3(null);
            setimgurl3(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);
            const response = await axios.get(`https://csyserver.shop/cards/set/${randomId}`);
            settext(response.data.result.mind_tarot);
            setc1(JSON.parse(response.data.result.set_info).first);
            setc2(JSON.parse(response.data.result.set_info).last);
            setc3(JSON.parse(response.data.result.set_info).middle);
            
        } catch (e) {
            setError(e);
        }
        setLoading(false);
        };
        fetchUsers();
    }, []);
    console.log("->",card1,card2,card3);
    console.log("->",card1,card2,card3);
    var cardText=text;
    const date = format(new Date(), 'yyyy-MM-dd');
    axios.get(`https://csyserver.shop/cards/tarot/${c1}`)
    .then(function(response1) {
        setcard1(response1.data.result.tarotName_e); 
        setimgurl1(response1.data.result.tarotUrlImage);
    })
    .catch(function(error) {
        console.log("실패");
    })
    axios.get(`https://csyserver.shop/cards/tarot/${c2}`)
    .then(function(response2) {
        setcard2(response2.data.result.tarotName_e); 
        setimgurl2(response2.data.result.tarotUrlImage);
        
    })
    .catch(function(error) {
        console.log("실패");
    })
    axios.get(`https://csyserver.shop/cards/tarot/${c3}`)
    .then(function(response3) {
        setcard3(response3.data.result.tarotName_e); 
        setimgurl3(response3.data.result.tarotUrlImage);
    })
    .catch(function(error) {
        console.log("실패");
    })
    const card1Title = card1;
=======
    const baseUrl = 'https://csyserver.shop';
    // const baseUrl = 'http://10.0.2.2:3000';
    const setId = route.params.setId;

    const card1Title = "TheMoon";
>>>>>>> b7fbee132cdb438d18c133aa44abd5cb3fe226dd
    const url1="../../../TarotCardImg/TheMoon.png";
    const card1Img = require(url1);
    const card2Title = card2;
    const url2="../../../TarotCardImg/TheMoon.png";
    const card2Img = require(url2);
    const card3Title = card3;
    const url3="../../../TarotCardImg/TheMoon.png";
    const card3Img = require(url3);


    const {invenMindCreate} = useContext(LogContext);
    const onSave = () => {
        invenMindCreate({
            card1Title,
            card2Img,
            card2Title,
            card3Img,
            card3Title,
            card1Img,cardText,
            date
        });
        navigation.navigate('MainTab');
    };
    const onSave2 = () => {
        invenMindCreate({
            card1Title,
            card2Img,
            card2Title,
            card3Img,
            card3Title,
            card1Img,cardText,
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
            questionId : 4,
            oneOrSet: 'set',
            tarotId : null,
            setId : setId,
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
            <View style={{flex:0.2}}></View>
            <ScrollView style={{flex:2}}>
                <View style={styles.result}>
                <Text style={{color:"blanchedalmond",left:-20,fontSize:30,marginBottom:20}}>마음 타로</Text>
                    <View>
                    <Text style={{color:"white", fontSize:23,left:-20}}>{card1Title}</Text>
                    <Image source={card1Img} style={styles.cardImg}/>
                    </View>
                    <View style={{flexDirection:"row", justifyContent:"center"}}>
                        <View>
                        <Text style={{color:"white", fontSize:23,left:-20}}>{card2Title}</Text>
                        <Image source={card2Img} style={styles.cardImg}/>
                        </View>
                        <View style={{width:15}}></View>
                        <View>
                        <Text style={{color:"white", fontSize:23,left:-20}}>{card3Title}</Text>
                        <Image source={card3Img} style={styles.cardImg}/>
                        </View>
                    </View>
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

export default ResultMind;


const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    result:{
        flex:2,
        alignItems:"center",
        flexDirection:"column",
        justifyContent:"center",
        left:18,
       
    },
    cardImg:{
        width:191/2,
        height:321/2,
        
        
    },
    resulttext:{
        flex:4,
        alignItems:"center",
        marginTop:20,
        marginBottom:30,
        
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
