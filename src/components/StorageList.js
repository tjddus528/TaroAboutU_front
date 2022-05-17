import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import First from './storageCard/Frist';


function StorageList({inven}) {
    return (
      <FlatList
        data={inven}
        style={styles.block}
        renderItem={({item}) => <First inven={item} />}
        keyExtractor={(inven) => inven.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      
    );
  }
  

const styles = StyleSheet.create({
  block: {flex: 1, 
  width:"90%",
marginLeft:20,
marginVertical:15,
borderColor:"white"},
  separator: {
    backgroundColor: '#030303',
    height: 1,
    width: '100%',
  },
});

export default StorageList;