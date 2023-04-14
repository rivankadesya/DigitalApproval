import React, {useState, useEffect} from 'react';
import styles from './styles';
import {Text, View} from 'react-native';
import NetInfo from '../widget/netinfo.js';
import DateTimePickerFunction from '../widget/datetimepicker';
import SliderWidget from '../widget/slider';
import ProgressWidget from '../widget/ProgressWidget';
import ProgressBarAndroidWidget from '../widget/ProgressBarAndroidWidget';
import {ScrollView} from 'react-native-gesture-handler';
import ClipboardWidget from '../widget/ClipboardWidget';

import SnapCarouselWidgets from '../widget/SnapCarouselWidget';
import ImageViewerWidget from '../widget/ImageViewerWidget';

const Tugas3 = () => {
  return (
    <ScrollView style={[styles.container]}>
      <Text style={styles.tittle}>NetView</Text>
      <NetInfo />

      <Text style={styles.tittle}>Date Time Picker</Text>
      <DateTimePickerFunction />

      <Text style={styles.tittle}>NetView</Text>
      <SliderWidget />

      <Text style={styles.tittle}>Progress View</Text>
      <ProgressWidget />

      <Text style={styles.tittle}>Progress Bar Android</Text>
      <ProgressBarAndroidWidget />

      <Text style={styles.tittle}>Clipboard</Text>
      <ClipboardWidget />

      <Text style={styles.tittle}>Clipboard</Text>
      <SnapCarouselWidgets />

      {/* <ImageViewerWidget /> */}
    </ScrollView>
  );
};

export default Tugas3;
