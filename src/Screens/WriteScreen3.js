import React,{useState} from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet,Alert,View,Text,ScrollView, ImageBackground, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import WriteHeader from '../components/WriteHeader';
import WriteEditor from '../components/WriteEditor';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

function WriteScreen3({route}) {
    const log = route.params?.log;

    const [title, setTitle] = useState(log?.title ?? '');
    const [body, setBody] = useState(log?.body ?? '');
    const navigation = useNavigation();
    const [date, setDate] = useState(log ? new Date(log.createDate) : new Date());

    const tarottext=route.params.tarottext;
    const tarotitle1=route.params.tarotitle1;
    const cardImg1=route.params.cardImg1;
    const tarotitle2=route.params.tarotitle2;
    const cardImg2=route.params.cardImg2;
    const tarotitle3=route.params.tarotitle3;
    const cardImg3=route.params.cardImg3;
    

    const baseUrl = 'https://csyserver.shop';
    // 다이어리 생성함수
    function SaveDiary(){
      const url = `${baseUrl}/diary`;
      const DiaryData = {
        userId: 1,
        createDate: date,
        content : body,
        title: title,
      };
      if (DiaryData.title==""||DiaryData.content==""){
        if (DiaryData.title==""&&DiaryData.content!=""){
          Alert.alert("제목을 입력하세요");
        }else{
          Alert.alert("내용을 입력하세요");
        }
       
        return;
      }
      axios.post(url, DiaryData)
        .then((response) => {
            console.log(response.data);
        }).catch((error)=>{
            console.log(error);
        })
        navigation.navigate('MainTab')
    };
    // 다이어리 삭제 함수
   
    function DeleteDiary(){
      const diaryId = log.diaryId;
      const url = `${baseUrl}/diary/${diaryId}/status`;
      axios.patch(url)
        .then((response) => {
            console.log(response.data);
        }).catch((error)=>{
            console.log(error);
        })
        
  };
  // 다이어리 수정 함수
  function ModifyDiary(){
    const diaryId = log.diaryId;
    const url = `${baseUrl}/diary/${diaryId}`;
    const DiaryData={
      userId: 1,
        title:title,
        content : body,
        diaryId,
    };
    if (DiaryData.title==""||DiaryData.content==""){
      if (DiaryData.title==""&&DiaryData.content!=""){
        Alert.alert("제목을 입력하세요");
      }else{
        Alert.alert("내용을 입력하세요");
      }
     
      return;
    }
    axios.patch(url,DiaryData)
      .then((response) => {
          console.log(response.data);
      }).catch((error)=>{
          console.log(error);
      })
      navigation.navigate('MainTab')
      
};
    const onSave = () => {
        if (log) {
            ModifyDiary();
          } else {
            SaveDiary();
          }
    };
    const onAskRemove = () => {
        Alert.alert(
          '삭제',
          '정말로 삭제하시겠어요?',
          [
            {text: '취소', style: 'cancel'},
            {
              text: '삭제',
              onPress: () => {
                DeleteDiary();
                navigation.pop();
              },
              style: 'destructive',
            },
          ],
          {
            cancelable: true,
          },
        );
      };
  
    return (
      <SafeAreaView style={styles.block}>
        <KeyboardAvoidingView
          style={styles.avoidingView}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <WriteHeader onSave={onSave} 
          onAskRemove={onAskRemove}
          isEditing={!!log}
          date={date}
          onChangeDate={setDate}/>
          <ScrollView
           horizontal={true}
           showsHorizontalScrollIndicator = {true}
           >
      <View style={styles.editor}>
      <WriteEditor
        title={title}
        body={body}
        date={date}
        onChangeTitle={setTitle}
        onChangeBody={setBody}
        
      />
      <View style={{alignItems:"flex-end",top:-20}}>
        <Text style={{color:"white"}}>옆으로 넘기면 해설이 보여요</Text>
        </View>
      </View>

    
            {/* 뽑은 타로 알려주기 */}
            {/* <ImageBackground source={require("../img/background.png")} 
            style={styles.tarot} imageStyle={{borderRadius:20, height:'105%', width:'125%'}}> */}
            <View style={styles.tarot}>
              <ScrollView style={styles.scrView}>
                <Image source={require('../img/barimg.png')} style ={{alignItems:"center", marginLeft:80, marginBottom:15}}></Image>
                <View><Text style={{ textAlign: "center", fontSize: 19, color: 'white', marginBottom:10 }}>당신이 뽑은 카드는 {'\n'}"{tarotitle1}", "{tarotitle2}","{tarotitle3}" 입니다.</Text></View>
                <Image source={require('../img/bar3.png')} ></Image>
                <View style={{ flexDirection: "row", marginVertical: 10, marginTop:15, marginBottom:20, marginLeft:15 }}>{/* <Text style={{color:"white"}}>{tarotitle1}</Text> */}
                  {cardImg1}
                  {cardImg2}
                  {cardImg3}</View>
                  <Image source={require('../img/bar3.png')} ></Image>
                <Text style={{ textAlign: "center", marginTop:15, marginRight: 15, fontSize: 16, color: 'white' }}>{tarottext}</Text>
              </ScrollView>
            </View>
            {/* </ImageBackground> */}
          </ScrollView>
        </KeyboardAvoidingView>
        <View></View>
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  scrView:{
        paddingHorizontal:20,
        width:360,
        marginHorizontal:10,
        paddingTop:10,
        height:680,
      
  },
    block: {
        flex: 1,
        backgroundColor: '#030303',
        
      },
      editor:{
        width:360,
        marginLeft:13,
      },  
      avoidingView: {
        flex: 1,
      },
      tarot:{
        paddingHorizontal:20,
        alignItems:"center",
        borderRadius:35,
        borderColor:'#F0C997',
        borderWidth:1,
        width:360,
        marginHorizontal:30,
        backgroundColor:"black",
        paddingTop:30,
        height:680,
      },
});

export default WriteScreen3;