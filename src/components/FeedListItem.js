import React,{useState,useEffect} from 'react';
import {Platform, Pressable, StyleSheet, Text,View,Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

function FeedListItem({log}) {
  const {title, createDate,oneOrSet, setId,tarotId,questionId} = log; // 사용하기 편하게 객체 구조 분해 할당

  function imgfunc(id) {
    switch (id) {
        case 0:
            return <Image source={require("../../TarotCardImg/TheFool.png")} style={styles.cardImg}></Image>
        case 1:
            return <Image source={require("../../TarotCardImg/TheMagician.png")} style={styles.cardImg}></Image>
        case 2:     
            return <Image source={require("../../TarotCardImg/TheHighPriestess.png")} style={styles.cardImg}></Image>
        case 3:
            return <Image source={require("../../TarotCardImg/TheEmpress.png")} style={styles.cardImg}></Image>
        case 4:
            return <Image source={require("../../TarotCardImg/TheEmperor.png")} style={styles.cardImg}></Image>
        case 5:
            return <Image source={require("../../TarotCardImg/TheHierophant.png")} style={styles.cardImg}></Image>
        case 6:
            return <Image source={require("../../TarotCardImg/TheLovers.png")} style={styles.cardImg}></Image>
        case 7:
            return <Image source={require("../../TarotCardImg/TheChariot.png")} style={styles.cardImg}></Image>
        case 8:
            return <Image source={require("../../TarotCardImg/Strength.png")} style={styles.cardImg}></Image>
        case 9:
            return <Image source={require("../../TarotCardImg/TheHermit.png")} style={styles.cardImg}></Image>
        case 10:
            return <Image source={require("../../TarotCardImg/WheelofFortune.png")} style={styles.cardImg}></Image>
        case 11:
            return <Image source={require("../../TarotCardImg/Justice.png")} style={styles.cardImg}></Image>
        case 12:
            return <Image source={require("../../TarotCardImg/TheHangedMan.png")} style={styles.cardImg}></Image>
        case 13:
            return <Image source={require("../../TarotCardImg/Death.png")} style={styles.cardImg}></Image>
        case 14:
            return <Image source={require("../../TarotCardImg/Temperance.png")} style={styles.cardImg}></Image>
        case 15:
            return <Image source={require("../../TarotCardImg/TheDevil.png")} style={styles.cardImg}></Image>
        case 16:
            return <Image source={require("../../TarotCardImg/TheTower.png")} style={styles.cardImg}></Image>
        case 17:
            return <Image source={require("../../TarotCardImg/TheStar.png")} style={styles.cardImg}></Image>
        case 18:
            return <Image source={require("../../TarotCardImg/TheMoon.png")} style={styles.cardImg}></Image>
        case 19:
            return <Image source={require("../../TarotCardImg/TheSun.png")} style={styles.cardImg}></Image>
        case 20:
            return <Image source={require("../../TarotCardImg/Judgement.png")} style={styles.cardImg}></Image>
        case 21:
            return <Image source={require("../../TarotCardImg/TheWorld.png")} style={styles.cardImg}></Image>
        default:
            return <Image source={require("../../TarotCardImg/TheWorld.png")} style={styles.cardImg}></Image>
    }
}

const [cardTitle, setCardTitle] = useState(null);
const [text, setText] = useState(null);
  function card1(){
    axios.get(`https://csyserver.shop/cards/tarot/${tarotId}`)
    .then(function (response) {
      // console.log(response.data.result.tarotName_e);
      setCardTitle(response.data.result.tarotName_e); 
      if (questionId==1){
        setText(response.data.result.yesOrNo);
      }
      else if (questionId==2){
        setText(response.data.result.todayTarot);
      }
      else if (questionId==3){
        setText(response.data.result.loveTarot);
      }
    }).catch(function (error) {
       console.log(error)
    })

    console.log(cardTitle);
    const cardImg = imgfunc(tarotId);
    navigation.navigate('Write2', {
      tarotitle:cardTitle,tarottext:text,cardImg:cardImg,cardId:tarotId,
    log});
  }

  const [Card1, setCard1] = useState(null);
  const [Card2, setCard2] = useState(null);
  const [Card3, setCard3] = useState(null);

  const [CardTitle1, setCardTitle1] = useState(null);
  const [CardTitle2, setCardTitle2] = useState(null);
  const [CardTitle3, setCardTitle3] = useState(null);

  function card3(){
      axios.get(`https://csyserver.shop/cards/set/${setId}`)
      .then(function (response) {
        setCard1(JSON.parse(response.data.result.setInfo).first);
        setCard2(JSON.parse(response.data.result.setInfo).last);
        setCard3(JSON.parse(response.data.result.setInfo).middle);
        setText(response.data.result.mindTarot);
      }).catch(function (error) {
        console.log(error)
     })
     console.log(Card1,Card2,Card3);

     axios.get(`https://csyserver.shop/cards/tarot/${Card1}`)
     .then(function(response1) {
      setCardTitle1(response1.data.result.tarotName_e); 
     })
     .catch(function(error) {
         console.log("실패");
     })
     axios.get(`https://csyserver.shop/cards/tarot/${Card2}`)
     .then(function(response2) {
      setCardTitle2(response2.data.result.tarotName_e); 
         
     })
     .catch(function(error) {
         console.log("실패");
     })
     axios.get(`https://csyserver.shop/cards/tarot/${Card3}`)
     .then(function(response3) {
      setCardTitle3(response3.data.result.tarotName_e); 
     })
     .catch(function(error) {
         console.log("실패");
     })
     const cardImg1 = imgfunc(Card1);
     const cardImg2 = imgfunc(Card2);
     const cardImg3 = imgfunc(Card3);
     
  // console.log(CardTitle1,CardTitle2,CardTitle3)

  // console.log(cardImg1,cardImg2,cardImg3);
  navigation.navigate('Write3',
        {tarotitle1:CardTitle1,
            tarotitle2:CardTitle2,
            tarotitle3:CardTitle3,
            tarottext:text,
            cardImg1:cardImg1,
            cardImg2:cardImg2,
            cardImg3:cardImg3,
            setId:setId, log});
  }



  const navigation = useNavigation()
  const onPress = () => {
    if (oneOrSet==null){
      navigation.navigate('Write', {
        log,
      });
    }
    else if (oneOrSet=="one"){
      card1();
    }
    else if (oneOrSet=="set"){
      card3();
    }
    
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
  cardImg:{
        width:191/1.5,
        height:321/1.5,
        marginTop:100,  
    },
});

export default FeedListItem;
