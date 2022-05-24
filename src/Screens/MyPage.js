import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native'


function MyPage(){
    return(
        <View style={styles.container}>
            <View style={styles.head}><Text style={styles.headText}>마이페이지</Text></View>
            <View style={styles.middle}>
                <Image source={require('../img/bar2.png')}/>
                <Image source={require("../img/mypageicon.png")} style={styles.mypageicon}/>
                <Image source={require('../img/bar3.png')} style={{marginBottom:20}}/>
                <View
                style={{width:300,}}>
                    <Text style={styles.text}>이름</Text>
                    <Text style={styles.text}>생년월일</Text>
                    <Text style={styles.text}>성별</Text>
                    </View>
                    <Image source={require('../img/bar3.png')} style={{marginTop:10}}/>

            </View>
            <View style={styles.bottom}></View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#030303",
    },
    head:{
        flex:1.2,
        alignItems:"center",
        justifyContent:"flex-end",
    },
    headText:{
        color:"white",
        fontSize:25,
        marginBottom:10,
    },
    middle:{
        flex:5,
        alignItems:"center",
        
    },
    bottom:{
        flex:4,
        textAlign:"center",
    },
    mypageicon:{
        marginTop:15,
        marginBottom:15,
    },text:{
        color:"white",
        
        marginBottom:30,
        fontSize:20,
    }
});
export default MyPage;