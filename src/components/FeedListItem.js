import React from 'react';
import {Platform, Pressable, StyleSheet, Text,View} from 'react-native';
import {format, formatDistanceToNow} from 'date-fns';
import {ko} from 'date-fns/locale';
import {useNavigation} from '@react-navigation/native';

function truncate(text) {
  // 정규식을 사용해 모든 줄 바꿈 문자 제거
  const replaced = text.replace(/\n/g, ' ');
  if (replaced.length <= 100) {
    return replaced;
  }
  return replaced.slice(0, 100).concat('...');
}

export const today2 = () => {
  let now = new Date();
  let dayofWeek= now.getDay();
  const dayofweek = ['SUN','MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  let dayweek=dayofweek[dayofWeek];
  return dayweek; 
}

function FeedListItem({log}) {
  const {title, body, date} = log; // 사용하기 편하게 객체 구조 분해 할당
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Write', {
      log,
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
        <View style={styles.day}><Text style={styles.date}>{today2(new Date(date).getDay())}</Text>
        <Text style={styles.date}>  {new Date(date).getDate()}</Text></View>
      
      <Text style={styles.title}>{title}</Text>
      
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
  },
  date: {
    fontSize: 20,
    color:"white",
  },
  title: {
    marginTop:8,
    color:"white",
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  day:{
    marginRight:16,
    justifyContent:"center",
    borderRightColor:"white",
    borderRightWidth:1,
    paddingRight:18
  }
  
});

export default FeedListItem;
