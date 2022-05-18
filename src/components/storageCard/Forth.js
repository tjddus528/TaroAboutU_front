import React from 'react';
import {Platform, Pressable, StyleSheet, Text,View,Image} from 'react-native';
import {format, formatDistanceToNow} from 'date-fns';
import {ko} from 'date-fns/locale';
import {useNavigation} from '@react-navigation/native';


function Forth({invenMind}) {
  const {card1Title, card1Img, card2Title, card2Img, card3Title, card3Img, text} = invenMind; // 사용하기 편하게 객체 구조 분해 할당
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('ResultMind_inven', {
      invenMind,
    });
  };
  return (
    <Pressable
      style={({pressed}) => [
        styles.block,
        Platform.OS === 'ios' && pressed && {backgroundColor: '#efefef'},
      ]}
      android_ripple={{color: '#ededed'}}
      onPress={onPress}>
          <View style={styles.view}>
      <Text style={styles.title}>마음 타로</Text>
      <Image source={require('../../img/Linewhite.png')}/>
      <Image source={require('../../img/pop.png')} style={styles.img}/>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    block: {
      backgroundColor: '#030303',
      paddingHorizontal: 14,
      paddingVertical: 17,
      borderColor:"white",
      borderWidth:1,
      marginBottom:20,
      flexDirection:"row",
      width:300,
      height:120,
      justifyContent:"center",
      alignItems:"center",
    },
    view:{
        flexDirection:"column",
        alignItems:"center",
    },
    title: {
      marginTop:8,
      color:"white",
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 15,
      
    },
    img:{
        marginTop:15,
        width:40,
        height:40,
    }
  });

export default Forth;
