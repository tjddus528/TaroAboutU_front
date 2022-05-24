import React,{useContext} from 'react';
import {View, Text,Button, StyleSheet,Image,TouchableOpacity,ImageBackground,ScrollView} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import LogContext from '../../contexts/LogContext';
import {useNavigation} from '@react-navigation/native';

function ResultMind_inven({route}){
    const {invenMind} = useContext(LogContext);
    // console.log(JSON.stringify(invenMind, null, 2));
    const date = route.params.date;
    const currentDate = route.params.currentDatee;
    const navigation = useNavigation();
    const filteredLogs = invenMind.filter(
        () => currentDate===date,
    );
    const lastValue = filteredLogs[0];
    return(
        <View style={styles.container}>
            <ImageBackground source={require('../../img/background.png')} style={{width:"100%",height:"102%",top:-10}}>
            <View style={{flex:0.2}}></View>
            <ScrollView style={{flex:2}}>
                <View style={styles.result}>
                <Text style={{color:"blanchedalmond",left:-20,fontSize:30,marginBottom:20}}>마음 타로</Text>
                {/* <Text style={{color:"blanchedalmond",left:-20,fontSize:30,marginBottom:20}}>{lastValue.id}</Text> */}
                    <View>
                    <Text style={{color:"white", fontSize:23,left:-20}}>{lastValue.card1Title}</Text>
                    <Image source={lastValue.card1Img} style={styles.cardImg}/>
                    </View>
                    <View style={{flexDirection:"row", justifyContent:"center"}}>
                        <View>
                        <Text style={{color:"white", fontSize:23,left:-20}}>{lastValue.card2Title}</Text>
                        <Image source={lastValue.card2Img} style={styles.cardImg}/>
                        </View>
                        <View style={{width:15}}></View>
                        <View>
                        <Text style={{color:"white", fontSize:23,left:-20}}>{lastValue.card3Title}</Text>
                        <Image source={lastValue.card3Img} style={styles.cardImg}/>
                        </View>
                    </View>
                </View>
                
                <View style={styles.resulttext}><Text
                style={{color:"white", width:300, fontSize:15}}>{lastValue.cardText}
            </Text>
            
            </View>
            <View style={{alignItems:"center",flex:1}}>
            <TouchableOpacity onPress={()=> {navigation.pop()}}><View style={styles.goTab}><Icon name="inventory" size={24} style={{color:"white"}}/><Text style={styles.gotext}>보관함으로 돌아가기</Text></View></TouchableOpacity>
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
