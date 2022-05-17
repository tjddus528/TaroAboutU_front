import React, {useEffect, useRef, useState} from 'react';
import {Platform, Pressable,Image, StyleSheet, View,Animated,Text,TouchableOpacity} from 'react-native';

function Card5({navigation}){
    const [isSelect, setSelect] = useState([false, false, false]);
    const cardarr = (number) => {
        return (
            id=number,
          <TouchableOpacity
            style={[
              styles.buttonContainer,
              {top: isSelect[id] ?0 : 50},
            ]}
            onPress={() => {
              setSelect([
                ...isSelect.slice(0, id),
                !isSelect[id],
                ...isSelect.slice(id + 1),
              ]);
            }}>
            <Image source={require("../../img/TaroCard.png")} style={styles.card5}/>
          </TouchableOpacity>
        );
      };
    return(cardarr(0))
}

const styles = StyleSheet.create({
    
  card5:{
    position:'absolute',
    left:100,
    transform: [{ rotate: '-3deg' }],
    top:5,
},
    
});

export default Card5;