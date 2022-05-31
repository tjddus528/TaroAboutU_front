import React,{useState} from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet,Alert,View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import WriteHeader from '../components/WriteHeader';
import WriteEditor from '../components/WriteEditor';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';



function WriteScreen({route}) {
    const log = route.params?.log;

    const [title, setTitle] = useState(log?.title ?? '');
    const [body, setBody] = useState(log?.content ?? '');
    const navigation = useNavigation();
    const [date, setDate] = useState(log ? log.createDate: new Date());
    
    const baseUrl = 'https://csyserver.shop';
    // 다이어리 생성함수
    function SaveDiary(){
      const url = `${baseUrl}/diary`;
      const DiaryData = {
        userId: 1,
        createDate: date,
        title:title,
        content : body,
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
        navigation.pop();
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
      navigation.pop();
      
};


    const onSave = () => {
      if (log) {    
          ModifyDiary();
        } 
      else {
          SaveDiary();
      }
      // navigation.pop();
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
          <View style={{alignItems:"center",
    justifyContent:"center",flex:10}}>
      <WriteEditor
            title={title}
            body={body}
            date={date}
            onChangeTitle={setTitle}
            onChangeBody={setBody}
          /></View>
        </KeyboardAvoidingView>
      </SafeAreaView>
      
    );
  }

const styles = StyleSheet.create({
    block: {
        flex: 1,
        backgroundColor: '#030303',
      },
      avoidingView: {
        flex: 1,
      },
});

export default WriteScreen;