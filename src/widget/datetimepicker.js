import React, {useState, useEffect} from 'react';
import styles from '../screen/styles';
import {View, TouchableOpacity, Text} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

const DateTimePickerFunction = () => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  return (
    <View>
      <TouchableOpacity
        style={{
          height: 20,
          width: 100,
          backgroundColor: '#9FC5E8',
          alignSelf: 'center',
          borderRadius: 20,
        }}
        onPress={() => setShowPicker(true)}>
        <Text
          style={{
            color: 'white',
            alignSelf: 'center',
            verticalAlign: 'middle',
          }}>
          Date
        </Text>
      </TouchableOpacity>
      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DateTimePickerFunction;
