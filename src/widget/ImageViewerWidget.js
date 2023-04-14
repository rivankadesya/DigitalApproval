import React from 'react';
import {StyleSheet, Text, View, Modal} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const images = [
  {
    url: 'https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2022/01/23/598596337.jpg',
  },
  {
    url: 'https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2022/01/23/598596337.jpg',
  },
  {
    url: 'https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2022/01/23/598596337.jpg',
  },
];

const ImageViewerWidget = () => {
  return (
    <View style={styles.container}>
      <Modal visible={true} transparent={true}>
        <ImageViewer imageUrls={images} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {},
});

export default ImageViewerWidget;
