import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import FeedListItem from './FeedListItem';


function FeedList({logs,onScrolledToBottom, ListHeaderComponent}) {
    const onScroll = (e) => {
        if (!onScrolledToBottom) {
            return;
          }
        const {contentSize, layoutMeasurement, contentOffset} = e.nativeEvent;
        const distanceFromBottom =
          contentSize.height - layoutMeasurement.height - contentOffset.y;
    
        if (distanceFromBottom < 72) {
          onScrolledToBottom(true);
        } else { 
          onScrolledToBottom(false);
        }
      };
    return (
      <FlatList
        data={logs}
        style={styles.block}
        renderItem={({item}) => <FeedListItem log={item} />}
        keyExtractor={(log) => log.diaryId}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        onScroll={onScroll}
        ListHeaderComponent={ListHeaderComponent}
      />
    );
  }
  

const styles = StyleSheet.create({
  block: {
    flex: 1, 
    width:"95%",
    marginLeft:10,
    marginBottom:10,
    borderColor:"white"},
    separator: {
    backgroundColor: '#030303', 
  },
});

export default FeedList;