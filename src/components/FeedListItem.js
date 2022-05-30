import React from 'react';
import {Platform, Pressable, StyleSheet, Text,View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function FeedListItem({log}) {
  const {title, createDate} = log; // 사용하기 편하게 객체 구조 분해 할당
  const navigation = useNavigation()
  const onPress = () => {
    navigation.navigate('Write', {
      log,
    });
  };
  const strArr = createDate.split('-');
  const today2 = () => {
    let now = new Date(createDate);
    let dayofWeek= now.getDay();
    const dayofweek = ['SUN','MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let dayweek=dayofweek[dayofWeek];
    return dayweek; 
  }
  return (
    <Pressable
      style={({pressed}) => [
        styles.block,
        Platform.OS === 'ios' && pressed && {backgroundColor: '#efefef'},
      ]}
      android_ripple={{color: '#ededed'}}
      onPress={onPress}>
        <View style={styles.day}>
        <Text style={styles.date2}>{today2()}</Text>
        <Text style={styles.date}>{strArr[2]}</Text>
        </View>
      <Text style={styles.title}>{title}</Text>
      
    </Pressable>
  );
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: '#030303',
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderColor:"white",
    borderWidth:1,
    marginBottom:20,
    flexDirection:"row",
  },
  date: {
    fontSize: 14,
    color:"white",
    paddingLeft:4,
    fontWeight: 'bold',
  },
  date2: {
    fontSize: 14,
    color:"white",
    fontWeight: 'bold',
  },
  title: {
    marginTop:8,
    color:"white",
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  day:{
    marginRight:16,
    justifyContent:"center",
    borderRightColor:"white",
    borderRightWidth:1,
    paddingRight:18
  },
});

export default FeedListItem;
