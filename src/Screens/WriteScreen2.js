import React,{useState} from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet,Alert,View,Text,ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import WriteHeader from '../components/WriteHeader';
import WriteEditor from '../components/WriteEditor';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

function WriteScreen2({route,saveResult}) {
    const log = route.params?.log;

    const [title, setTitle] = useState(log?.title ?? '');
    const [body, setBody] = useState(log?.body ?? '');
    const navigation = useNavigation();
    const [date, setDate] = useState(log ? new Date(log.createDate) : new Date());

    const tarotitle=route.params.tarotitle;
    const tarottext=route.params.tarottext;
    const cardImg=route.params.cardImg;

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
            // saveResult();
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
      <View style={{alignItems:"flex-end",top:-20}}>
        <Text style={{color:"white"}}>옆으로 넘기면 해설이 보여요</Text>
        </View>
      </View>
          <View style={styles.tarot}>
            {/* 뽑은 타로 알려주기 */}
            <ScrollView style={styles.scrView}>
            <Text>당신이 뽑은 카드는 "{tarotitle}" 입니다.</Text>
            {/* <Text style={{color:"black"}}>{tarotitle}</Text> */}
            <View style={styles.imgview}>{cardImg}</View>
            {(tarottext==null)
                    ?(
                        <Text style={styles.txt}>
                            명확한 답을 내리기엔 어려운 질문이군요.
                            답은 당신의 내면이 알고 있습니다.
                        </Text>
                        )
                    :(
                        <Text style={styles.txt}>
                            당신의 질문에 대한 대답은 '{tarottext}' 입니다. 
                        </Text>
                    )
                    }
            </ScrollView>
          </View>
          </ScrollView>
        </KeyboardAvoidingView>
      <View></View>
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
 txt:{
  top:-70,
 },
 scrView:{
  

 },
    block: {
        flex: 1,
        backgroundColor: '#030303',
        
      },
      imgview:{
        top:-90,
        // backgroundColor:"red",
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
        borderRadius:10,
        width:360,
        marginHorizontal:30,
        backgroundColor:"aliceblue",
        paddingTop:30,
        height:680,
      },
      
});

export default WriteScreen2;