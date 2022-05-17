import React from 'react';
import {View, Text,Button, StyleSheet,Image,TouchableOpacity} from "react-native";

function TypeOfTaro({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.textView}>
                <Text style={styles.textColor}>오늘 당신의 고민은 무엇인가요?</Text>
                <Image source={require("../img/barimg.png")}/>
            </View>
            <View style={styles.middleView}>
                <TouchableOpacity onPress={()=> {navigation.navigate('SelectOneTaro')}}>
                <View style={styles.middleText1}><Text style={styles.middleText}>YES / NO</Text></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> {navigation.navigate('SelectThreeTaro1')}}>
                <View style={styles.middleText1}><Text style={styles.middleText}>심리 상태</Text></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> {navigation.navigate('SelectThreeTaro2')}}>
                <View style={styles.middleText1}><Text style={styles.middleText}>연애</Text></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> {navigation.navigate('SelectThreeTaro3')}}>
                <View style={styles.middleText1}><Text style={styles.middleText}>커리어</Text></View>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomView}>

            </View>
        </View>
    );
}

export default TypeOfTaro;


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#030303",
    },
    
    textColor:{
        color:"#F3D3A0",
        fontSize:20,
        padding:15,
    },
    textView:{
        flex:3,
        alignItems:"center",
        justifyContent: "flex-end",
        
    },
    middleView:{
        flex:8,
        alignItems:"center",
        justifyContent :"center",
    },
    middleText1:{
        margin:25,
        backgroundColor:"#C4C4C4",
        width:300,
        justifyContent:"center",
        borderRadius:15,
        alignItems:"center",
        height:80,
    },
    
    middleText:{
        fontSize:20,
    },
    bottomView:{
        flex:2,
    }
    
});
