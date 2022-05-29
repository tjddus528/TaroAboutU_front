import React, {useRef} from 'react';
import {View, StyleSheet, TextInput,Text, ImageBackground} from 'react-native';


function WriteEditor({title, body, onChangeTitle, onChangeBody, date}) {
  const bodyRef = useRef()
  const today = () => {
    let now = new Date(date);
    let todayMonth = now.getMonth() +1;
    let todayYear = now.getFullYear();
    let todaydate= now.getDate();
    const month = ['January','Febuary',"March","April","May","June","July",
    "August","September","October","November","December"];
    let TodayMonth=month[todayMonth-1]
    return todayYear + ' | ' + TodayMonth + ' | '+todaydate ; 
  }
  const today2 = () => {
    let now = new Date(date);
    let dayofWeek= now.getDay();
    const dayofweek = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
    let dayweek=dayofweek[dayofWeek-1]
    return dayweek; 
  }
  return (
    
    <ImageBackground source={require('../img/gradation.png')} 
      style={{width:"100%", height:"95%", alignItems: "center", flex:1}}
      imageStyle={{borderRadius:20}}>
      <View style={styles.container}>
            <Text style = {styles.dayText}>{today(date)}</Text>
            <Text style = {styles.dayText}>{today2(date)}</Text>
        </View>
      <TextInput
        placeholder="제목을 입력하세요"
        style={styles.titleInput}
        returnKeyType="next"
        onChangeText={onChangeTitle}
        value={title}
        onSubmitEditing={() => {
            bodyRef.current.focus()
          }}
      />
      <TextInput
        placeholder="당신의 오늘을 기록해보세요"
        style={styles.bodyInput}
        multiline
        textAlignVertical="top"
        onChangeText={onChangeBody}
        value={body}
        ref={bodyRef}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    alignItems:"center",
    justifyContent:"center",
    marginTop:5,
    padding:0,
    width:"100%",
    marginop:0,
  },
  dayText:{
    fontSize:20,
    color: "white",
  },
  block:
  {
    flex: 1, 
    //backgroundColor: "#7774C5", 
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    width: "90%"
  },
  titleInput: {
    textAlign: "center",
    paddingVertical: 0,
    fontSize: 18,
    marginBottom: 16,
    fontWeight: 'bold',
    marginTop: 20,
        width:300,
        borderRadius:5,
        paddingLeft:10,
        paddingRight:10,
        
  },
  bodyInput: {
    flex: 1,
    fontSize: 20,
    paddingVertical: 0,
    color:"white",
  },
});

export default WriteEditor;