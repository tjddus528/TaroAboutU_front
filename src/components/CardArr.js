import React, {useEffect, useRef, useState} from 'react';
import {Platform, Pressable,Image, StyleSheet, View,Animated,Text,TouchableOpacity} from 'react-native';

import Card0 from './card/Card0';
import Card1 from './card/Card1';
import Card2 from './card/Card2';
import Card3 from './card/Card3';
import Card4 from './card/Card4';
import Card5 from './card/Card5';
import Card10 from './card/Card10';
import Card11 from './card/Card11';
import Card6 from './card/Card6';
import Card7 from './card/Card7';
import Card8 from './card/Card8';
import Card9 from './card/Card9';




function CardArr({navigation}){
    return(
        <View style = {styles.container}>
            <Card0></Card0>
            <Card1></Card1>
            <Card2></Card2>
            <Card3></Card3>
            <Card4></Card4>
            <Card5></Card5>
            <Card6></Card6>
            <Card7></Card7>
            <Card8></Card8>
            <Card9></Card9>
            <Card10></Card10>
            <Card11></Card11>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        top:60,
    },
    card0:{
        position:'absolute',
        left:-35, 
        transform: [{ rotate: '-21deg' }],
        top:30,
    },
    card1:{
        position:'absolute',
        left:0, 
        transform: [{ rotate: '-18deg' }],
        top:15,
    },
    card2:{
        position:'absolute',
        left:25,
        transform: [{ rotate: '-15deg' }],
        top:12,
    },
    card3:{
        position:'absolute',
        left:50,
        transform: [{ rotate: '-12deg' }],
        top:12,
    },
    card4:{
        position:'absolute',
        left:75,
        transform: [{ rotate: '-9deg' }],
        top:5,
    },
    card5:{
        position:'absolute',
        left:100,
        transform: [{ rotate: '-3deg' }],
        top:5,
    },
    
});

export default CardArr;