import React, {useState} from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  Pressable,
  Modal,
  ActivityIndicator,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [isSelected, setSelection] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.loadingStyle}>
          <View style={styles.borderloading}>
            <ActivityIndicator size={'small'} />
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.button, styles.buttonClose]}
        onPress={() => setModalVisible(!modalVisible)}>
        <Text style={styles.textStyle}>LANJUTKAN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingStyle: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    height: 810,
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderloading: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: 50,
    height: 50,
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  fontlogin: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    marginTop: 13,
  },
  logo: {
    height: 55,
    width: 127,
    resizeMode: 'stretch',
    marginTop: 27,
    alignSelf: 'center',
  },
  digitalapprovalfont: {
    fontSize: 16,
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 8,
  },
  icon: {
    height: 16,
    width: 16,
    resizeMode: 'stretch',
    alignSelf: 'center',
    margin: 16,
  },
  centeredView: {
    alignSelf: 'center',
    marginTop: 258,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    // alignItems: 'center',
    shadowColor: '#000',
    height: 245,
    width: 320,
    shadowOpacity: 0.95,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    elevation: 2,
    width: 288,
    height: 48,
    alignSelf: 'center',
    color: 'black',
  },
  buttonOpen: {
    backgroundColor: 'black',
  },
  buttonClose: {
    backgroundColor: '#287AE5',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 13,
  },
  areaText: {
    fontSize: 16,
    marginTop: 16,
    marginLeft: 16,
    color: '#002558',
    fontWeight: 'bold',
  },
});

export default App;
