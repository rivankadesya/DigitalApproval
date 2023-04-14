import React, {useState, useEffect} from 'react';
import styles from '../screen/styles';
import {Text, View} from 'react-native';
import Slider from '@react-native-community/slider';

const SliderWidget = () => {
  return (
    <Slider
      style={{width: 200, height: 40}}
      minimumValue={0}
      maximumValue={100}
      minimumTrackTintColor="red"
      maximumTrackTintColor="blue"
      step={1}
    />
  );
};

export default SliderWidget;
