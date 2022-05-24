import React,{useContext} from 'react';
import {View, Text,Button, StyleSheet,Image,TouchableOpacity,ImageBackground,ScrollView} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import LogContext from '../../contexts/LogContext';

function ResultLove({navigation}){
    const invenLove=useContext(LogContext);
    const cardTitle = "Love Card";
    const cardImg = require("../../img/card.png");
    const cardText = 'Love cardText';
    const date = new Date();
    const {invenLoveCreate} = useContext(LogContext);
    const onSave = () => {
        invenLoveCreate({
            cardTitle,
            cardImg,cardText,
            date
        });
        navigation.navigate('MainTab');
    };
    const onSave2 = () => {
        invenLoveCreate({
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
                <Text style={{color:"blanchedalmond",bottom:-50,fontSize:30,marginBottom:-20}}>연애 타로</Text>
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

export default ResultLove;


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
        width:140,
        height:250,
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
