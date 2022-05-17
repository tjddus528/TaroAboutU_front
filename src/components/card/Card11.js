import React, {useEffect, useRef, useState} from 'react';
import {Platform, Pressable,Image, StyleSheet, View,Animated,Text,TouchableOpacity} from 'react-native';

function Card11({navigation}){
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
            <Image source={require("../../img/TaroCard.png")} style={styles.card11}/>
          </TouchableOpacity>
        );
      };
    return(cardarr(0))
}

const styles = StyleSheet.create({
    
  
card11:{
  position:'absolute',
  left:250,
  transform: [{ rotate: '18deg' }],
  top:30,
  
},
    
});

export default Card11;