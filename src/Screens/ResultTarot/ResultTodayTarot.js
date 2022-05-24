import React, {useContext} from 'react';
import {View, Text,Button, StyleSheet,Image,TouchableOpacity,ImageBackground,ScrollView} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import LogContext from '../../contexts/LogContext';

function ResultTodayTarot({navigation}){
    const invenToday=useContext(LogContext);
    const cardTitle = "TheMoon";
    const url="../../../TarotCardImg/TheMoon.png";
    const cardImg = require(url);
    const cardText = "희생과 모성 그리고 인내를 상징하는 18번 달카드를 뽑으셨습니다.\r\n뭔가 시끄러운 상황이 벌어지고 있음을 암시합니다. 달은 어두운 밤을 밝히는 유일한 빛입니다.\r\n시끄러운 상황이 모두 나만을 바라보고 있군요. 내키지 않은 일을 해야 하는 경우가 생깁니다.\r\n마음은 힘들지만 이를 다 밝힐 수도 없네요. 침묵하고 희생해야 하는 일이니 마음이 즐거울리 없습니다.\r\n자리를 뜨고 싶어도 내가 해야 할 일은 해야 합니다. 손해 보는 일이 있거나 자신과 무관한 곳에서 시간을 보내게 됩니다\r\n 후회할 일을 하게 되기도 하며 마음이 불편해지기도 합니다. 그러나 표시 하기 어려운 상황에 놓이지요.\r\n달은 어두운 모든 것을 아름답게 감추는 역할을 하기도 합니다. 마음과 다르게 행동해야 할 일들이 있을 것입니다.\r\n그러나 상대들을 나를 필요로 하네요. 그래서 마음이 무거운 하루가 됩니다.";
    const date = new Date();
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
                <TouchableOpacity onPress={onSave2}><View style={styles.goTab}><Image source={require('../../img/iconDiary.png')}/><Text style={styles.gotext}>타로 다이어리 쓰기</Text></View></TouchableOpacity>
                <TouchableOpacity onPress={onSave}><View style={styles.goTab}><Icon name="inventory" size={24} style={{color:"white"}}/><Text style={styles.gotext}>보관함에 저장하기</Text></View></TouchableOpacity>
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
        width:127,
        height:214,
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
