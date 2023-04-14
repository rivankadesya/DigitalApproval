import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Excample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Example</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {},
});

export default Excample;
