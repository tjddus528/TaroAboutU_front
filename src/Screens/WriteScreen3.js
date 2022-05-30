import React,{useState} from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet,Alert,View,Text,ScrollView} from 'react-native';
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
      axios.post(url, DiaryData)
        .then((response) => {
            console.log(response.data);
        }).catch((error)=>{
            console.log(error);
        })
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
    axios.patch(url,DiaryData)
      .then((response) => {
          console.log(response.data);
      }).catch((error)=>{
          console.log(error);
      })
      
};
    const onSave = () => {
        if (log) {
            ModifyDiary();
          } else {
            SaveDiary();
          }
          navigation.navigate('MainTab')
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
      </View>
          <View style={styles.tarot}>
            {/* 뽑은 타로 알려주기 */}
            <Text style={{color:"white"}}>{tarotitle1}</Text>
            {cardImg1}
            <Text style={{color:"white"}}>{tarotitle2}</Text>
            {cardImg2}
            <Text style={{color:"white"}}>{tarotitle3}</Text>
            {cardImg3}
            <Text style={{color:"white"}}>{tarottext}</Text>
          </View>
          </ScrollView>
        </KeyboardAvoidingView>
      <View></View>
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
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
        width:360,
        marginHorizontal:30,
      }
});

export default WriteScreen3;