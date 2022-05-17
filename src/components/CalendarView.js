import React from 'react';
import {Calendar} from 'react-native-calendars';
import {StyleSheet} from 'react-native';

function CalendarView({markedDates, selectedDate, onSelectDate}) {
  const markedSelectedDate = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
    },
  };

  return (
    <Calendar
      style={styles.calendar}
      markedDates={markedSelectedDate}
      onDayPress={(day) => {
        onSelectDate(day.dateString);
      }}
      theme={{
        selectedDayBackgroundColor: '#030303',
        arrowColor: '#030303',
        dotColor: '#030303',
        todayTextColor: '#030303',
      }}
    />
  );
}

const styles = StyleSheet.create({
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor:"#030303"
  },
});

export default CalendarView;