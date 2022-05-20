import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import First from './Frist';

function FirstList({invenYN}) {
    console.log(invenYN.cardTitle)
  return (
    <FlatList
      data={invenYN}
      style={styles.block}
      renderItem={({invenYN}) => <First invenYN={invenYN}/>}
      keyExtractor={(invenYN) => invenYN.id}
    />
  );
}

const styles = StyleSheet.create({
  block: {flex: 1,backgroundColor:
"red"},
  separator: {
    backgroundColor: 'red',
    height: 1,
    width: '100%',
  },
});

export default FirstList;