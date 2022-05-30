import React, { useState, useEffect } from 'react';
import {View,Text,StyleSheet,Image} from 'react-native'
import axios from 'axios';

function MyPage(){

    const baseUrl = 'https://csyserver.shop';
    const userId = 1;
    
    const [name, setName] = useState(null);
    const [birthday, setBirthday] = useState(null);
    const [gender, setGender] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            setError(null);
            setName(null);
            setGender(null);
            setBirthday(null);
            setLoading(true);
            const response = await axios.get(
                `${baseUrl}/user/${userId}`
            );
            setName(response.data.result.name);
            setBirthday(response.data.result.birthday);
            setGender(response.data.result.gender); // 데이터는 response.data 안에 들어있습니다.
          } catch (e) {
            setError(e);
          }
          setLoading(false);
        };
        fetchUsers();
    }, []);


    return(
        <View style={styles.container}>
            <View style={styles.head}><Text style={styles.headText}>마이페이지</Text></View>
            <View style={styles.middle}>
                <Image source={require('../img/bar2.png')}/>
                <Image source={require("../img/mypageicon.png")} style={styles.mypageicon}/>
                <Image source={require('../img/bar3.png')} style={{marginBottom:20}}/>
                <View
                style={{width:300,}}>
                    <Text style={styles.text}>이름 ㅣ {name}</Text>
                    <Text style={styles.text}>생년월일 ㅣ{birthday} </Text>
                    <Text style={styles.text}>성별 ㅣ {gender}</Text>
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