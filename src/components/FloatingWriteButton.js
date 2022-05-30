import React, {useEffect, useRef} from 'react';
import {Platform, Pressable, StyleSheet, View,Animated,Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

function FloatingWriteButton({hidden}) {
    const navigation = useNavigation();
  
    const onPress = () => {
      navigation.navigate('Write');
    };
  
    const animation = useRef(new Animated.Value(0)).current;
  
    useEffect(() => {
        Animated.spring(animation, {
          toValue: hidden ? 1 : 0,
          useNativeDriver: true,
          tension: 45,
          friction: 5,
        }).start();
      }, [animation, hidden]);
  
    return (
      <Animated.View
        style={[
          styles.wrapper,
          {
            transform: [
              {
                translateY: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 88],
                }),
              },
            ],
            opacity: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
          },
        ]}>
        <Pressable
          style={({pressed}) => [
            styles.button,
            Platform.OS === 'ios' && {
              opacity: pressed ? 0.6 : 1,
            },
          ]}
          android_ripple={{color: 'white'}}
          onPress={onPress}>
          <Icon name="add" size={24} style={styles.icon} />
        </Pressable>
        <Text style={styles.text}>오늘의 일기 작성하기</Text>
      </Animated.View>
    );
  }
const styles = StyleSheet.create({
  text:{
    marginLeft:10,
    color:"white",
    marginTop:5
  },
  wrapper: {
    // position: 'absolute',
    marginLeft:10,
    marginTop:10,
    flexDirection:"row",
    width: "100%",
    height: 56,
    shadowColor: '#4d4d4d',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    overflow: Platform.select({android: 'hidden'}),
  },
  button: {
    width: 30,
    height: 30,
    borderRadius: 28,
    backgroundColor: '#7774C5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
  },
});

export default FloatingWriteButton;