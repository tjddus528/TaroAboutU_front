import React,{useContext} from 'react';
import {Platform, Pressable, StyleSheet, Text,View,Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {format} from 'date-fns';
import LogContext from '../../contexts/LogContext';

function First({currentDate},) {
  const navigation = useNavigation();
  const currentDatee = currentDate;
  const date = format(new Date(), 'yyyy-MM-dd');
  const {invenYN} = useContext(LogContext);
    const filteredLogs = invenYN.filter(
        () => currentDate===date,
    );
  const onPress = () => {
    if (filteredLogs.length==0){
      alert('카드를 뽑지 않았습니다!');
      navigation.navigate("MainTab");
    }
    else{
      navigation.navigate('ResultYesOrNo_inven',{
          currentDatee,
          date,    
        });
    }
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
      <Text style={styles.title}>Yes/No</Text>
      <Image source={require('../../img/Linewhite.png')}/>
      <Image source={require('../../img/twoCard.png')} style={styles.img}/>
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
      marginBottom:25,
      flexDirection:"row",
      width:300,
      height:110,
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
        marginTop:5,
    }
  });

export default First;

