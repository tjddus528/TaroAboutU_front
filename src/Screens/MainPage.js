import React,{useEffect,useState} from 'react';
import {View, Text, Button, StyleSheet,Image,TouchableOpacity,ImageBackground} from "react-native";
import WeeklyCalendar from 'react-native-weekly-calendar';

function MainPage({navigation}){
    
    return(
        <View style = {styles.container}>
            <View style = {styles.week}>
            <WeeklyCalendar
              onDayPress={(weekday, i) => {
                console.log(weekday.format('ddd') + ' is selected! And it is day ' + (i+1) + ' of the week!')
              }}
              style={{backgroundColor:"#030303"}}
              themeColor='#6A6894'
              titleStyle={{ color: 'white'}
            }
              dayLabelStyle={{ color: 'white', }
            }
               />
            </View>
            <View style = {styles.main}>
                <View style={{flex : 1, backgroundColor:"black"}}>
                <Text style={styles.mainText}>Taro About U</Text>
                </View>
                <View style={{flex : 10,}}>
                    <ImageBackground style={{width: "100%", height:"100%" }}
                    source={require('../img/taro_frame.png')}>
                        <View style={styles.mainCard}>
                        <TouchableOpacity onPress={()=> {navigation.navigate('TypeOfTaro')}}><Image
                        style={styles.cardImage}
                        source={require('../img/questionMarkCard.png')}/></TouchableOpacity>
                        
                        <Text style={{color:"#EBC389", paddingTop:20,fontSize:18}}>오늘의 타로 뽑으러 가기</Text>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#030303",
    },
    week:{
        flex:0.9,
        marginTop:40,
        
    },

    main:{
        flex:6,
    },
    mainText:{
        textAlign:"center", 
        fontSize: 20,
        fontWeight: "400",
        color: "#FFFFFF",
        marginTop: 30,
    },
    cardImage:{
        width : 160,
        height: 250,
        
    },
    mainCard:{
        flex : 1,
        alignItems :"center",
        justifyContent: "center",
        marginTop: 70,
    },
});

export default MainPage;