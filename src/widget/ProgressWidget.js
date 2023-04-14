import {ProgressView} from '@react-native-community/progress-view';
import React, {useState, useEffect} from 'react';

const ProgressWidget = () => {
  return (
    <ProgressView
      progressTintColor="orange"
      trackTintColor="blue"
      progress={0.7}
    />
  );
};

export default ProgressWidget;
