import React from "react";
import {View, Text,Image,StyleSheet,TouchableOpacity} from 'react-native';


function LoginPage({navigation}){
    return(
        <View style={styles.container}>
           <Image style={styles.mainImg} source={require('../img/TARO_about_U.png') }/>
           <Image style={{marginBottom:40}}source={require('../img/LoginmainText.png')}/>
           <TouchableOpacity onPress={()=> {navigation.navigate('MainTab')}} style={{marginBottom:25}}>
               <View
               style={{backgroundColor:"#F7E600",
               width:280, height:55,justifyContent:"center",alignItems:"center",borderRadius:30,flexDirection:"row"}}><Image source={require("../img/kakaologo.png")} style={{width:30,height:30}}/><Text style={{fontSize:20,marginLeft:15}}>카카오 계정으로 로그인</Text></View></TouchableOpacity>
           {/* <TouchableOpacity onPress={()=> {navigation.navigate('MainTab')}} style={{marginBottom:25}}>
               <View
               style={{backgroundColor:"white",
               width:280, height:55,justifyContent:"center",alignItems:"center",borderRadius:30,flexDirection:"row"}}><Image source={require("../img/googlelogo.png")} style={{width:30,height:30}}/><Text style={{fontSize:20,marginLeft:15}}>구글 계정으로 로그인</Text></View></TouchableOpacity> */}
        </View>
    );
}
export default LoginPage;


const styles = StyleSheet.create({
    container:{
        backgroundColor:"#030303",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    mainImg:{
        marginBottom:30,
    }
    
});
