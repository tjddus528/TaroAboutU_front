import React from 'react';
import {View, Text,Button, StyleSheet,Image,TouchableOpacity,ImageBackground,ScrollView} from "react-native";
import CardArr from '../components/CardArr';
import Icon from 'react-native-vector-icons/MaterialIcons';

function ResultThreeTaro({navigation}){
    return(
        <View style={styles.container}>
            <ImageBackground source={require('../img/background.png')} style={{width:"100%",height:"102%",top:-10}}>
            <View style={{flex:0.2}}></View>
            <ScrollView style={{flex:2}}>
                <View style={styles.result}>
                <Text style={{color:"blanchedalmond",left:-20,fontSize:30,marginBottom:20}}>커리어</Text>
                    <View>
                    <Text style={{color:"white", fontSize:23,left:-20}}>THE EMPRESS</Text>
                    <Image source={require("../img/card.png")} style={styles.cardImg}/>
                    </View>
                    <View style={{flexDirection:"row", justifyContent:"center"}}>
                        <View>
                        <Text style={{color:"white", fontSize:23,left:-20}}>THE EMPRESS</Text>
                        <Image source={require("../img/card.png")} style={styles.cardImg}/>
                        </View>
                        <View style={{width:15}}></View>
                        <View>
                        <Text style={{color:"white", fontSize:23,left:-20}}>THE EMPRESS</Text>
                        <Image source={require("../img/card.png")} style={styles.cardImg}/>
                        </View>
                    </View>
                </View>
                
                <View style={styles.resulttext}><Text
                style={{color:"white", width:300, fontSize:15}}>당신은 사랑스럽고 따뜻하며 관능적이고 아름다운 만큼 카리스마 있는 사람입니다. 이 카드는 출산의 의미 강합니다. 실제 출산일 수도 있지만 새로운 생각이나 새로운 현실의 “출생”을 의미하기도 합니다.  이 카드를 뽑은 당신은 고민했던 일에 대해 새로운 국면을 맞게 될 것입니다. 지금까지 생각하지 못했던 새로운 상황이 출현할 것이며 그 상황에서 여황제로써 당신을 문제를 훌륭히 해결해나갈 것입니다. 그 순간들을 역경으로 생각하지 말고 풍요로운 마음으로 즐기세요. 그럼 모든 것이 순조로울 것입니다. 
                당신은 사랑스럽고 따뜻하며 관능적이고 아름다운 만큼 카리스마 있는 사람입니다. 이 카드는 출산의 의미 강합니다. 실제 출산일 수도 있지만 새로운 생각이나 새로운 현실의 “출생”을 의미하기도 합니다.  이 카드를 뽑은 당신은 고민했던 일에 대해 새로운 국면을 맞게 될 것입니다. 지금까지 생각하지 못했던 새로운 상황이 출현할 것이며 그 상황에서 여황제로써 당신을 문제를 훌륭히 해결해나갈 것입니다. 그 순간들을 역경으로 생각하지 말고 풍요로운 마음으로 즐기세요. 그럼 모든 것이 순조로울 것입니다. 
            </Text>
            
            </View>
            <View style={{alignItems:"center",flex:1}}>
                <TouchableOpacity onPress={()=> {navigation.navigate('Write2')}}><View style={styles.goTab}><Image source={require('../img/iconDiary.png')}/><Text style={styles.gotext}>타로 다이어리 쓰기</Text></View></TouchableOpacity>
                <TouchableOpacity onPress={()=> {navigation.navigate('MainTab')}}><View style={styles.goTab}><Icon name="inventory" size={24} style={{color:"white"}}/><Text style={styles.gotext}>보관함에 저장하기</Text></View></TouchableOpacity>
            </View>
            </ScrollView>
            <View style={{flex:0.2}}></View>
            </ImageBackground>
        </View>
    );
}

export default ResultThreeTaro;


const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    result:{
        flex:2,
        alignItems:"center",
        flexDirection:"column",
        justifyContent:"center",
        left:18,
       
    },
    cardImg:{
        width:100,
        height:190,
        
    },
    resulttext:{
        flex:4,
        alignItems:"center",
        marginTop:20,
        marginBottom:30,
        
    },
    goTab:{

        borderColor:"white",
        borderWidth:1,
        borderRadius:5,
        marginBottom:15,
        width:180,
        height:35,
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
    },
    gotext:{
        color:"white",
        paddingLeft:10,
    }
    
    
});
