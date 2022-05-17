import React,{useContext,useState} from 'react';
import {StyleSheet, View,Text,Image,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import First from '../components/storageCard/Frist';
import LogContext from '../contexts/LogContext';
import Second from '../components/storageCard/Second';
import Third from '../components/storageCard/Third';
import Forth from '../components/storageCard/Forth';

function InventoryFeed({navigation}) {
    const {inven} = useContext(LogContext);

  return (
    <View style={styles.block}>
        <View style={styles.top}>
            <View style={styles.topheader}>
                <Text style={styles.headtext}>Taro storage</Text>
                <TouchableOpacity onPress={()=> {navigation.navigate('Calendar')}}><Icon name="calendar-today" size={24} style={styles.icon} /></TouchableOpacity>
                
            </View>
            <View style={styles.topdate}>
                <Image source={require('../img/Purpleline.png')} style={{width:350}}/>
                <Text style={styles.topdatetext}>date</Text>
                <Image source={require('../img/Purpleline.png')} style={{width:350,}}/>
            </View>
            
        </View>
        <View style={styles.contentView}>
            <First inven={inven} />
           <Second inven={inven}/>
           <Third inven={inven}/>
           <Forth inven={inven}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
        backgroundColor:"#030303",
    },
    top:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    topheader:{
        flex:1.2,
        flexDirection:"row",
        width:350,
        alignItems:"flex-end",
        justifyContent:"center",
        marginBottom:15,
    },
    contentView:{
        flex:3.5,
        alignItems:"center",
        paddingTop:30,
    },
    icon:{
        right:-80,
        color:"white",
    },
    headtext:{
        fontSize:28,
        color:"white",
    },topdate:{
        flex:1,
        height:30,
        
        justifyContent:"center",
        
    },topdatetext:{
        color:"white",
        fontSize:33,
        paddingVertical:13,
        left:10,
    },
});

export default InventoryFeed;