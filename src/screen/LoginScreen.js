/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
// import {BlurView} from '@react-native-community/blur';
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
      <View style={styles.boxlogin}>
        <View style={styles.digitalapproval}>
          <Text style={styles.digitalapprovalfont}>Digital Approval</Text>
        </View>
        <Image
          style={styles.logo}
          source={require('../img/drawable-xxxhdpi/logo.png')}
        />
        <View style={styles.inputemail}>
          <Image
            style={styles.icon}
            source={require('../img/drawable-xxxhdpi/iconemail.png')}
          />
          <TextInput
            style={{color: 'black'}}
            placeholderTextColor={'grey'}
            placeholder="Alamat Email"
            onChangeText={onChangeText}
          />
        </View>
        <View style={styles.inputpassword}>
          <Image
            style={styles.icon}
            source={require('../img/drawable-xxxhdpi/iconpassowrd.png')}
          />
          <TextInput
            style={{color: 'black'}}
            placeholderTextColor={'grey'}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={onChangeText}
          />
        </View>
        <Text style={styles.resetpassword}>Reset Password</Text>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.areaText}>Pilih Area</Text>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>LANJUTKAN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          style={styles.buttonlogin}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.fontlogin}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxlogin: {
    width: 320,
    height: 381,
    color: 'red',
    backgroundColor: 'white',
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 199,
  },
  buttonlogin: {
    marginTop: 24,
    height: 48,
    width: 288,
    borderRadius: 5,
    backgroundColor: '#287AE5',
    alignSelf: 'center',
    marginBottom: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  digitalapproval: {
    backgroundColor: '#002558',
    width: 170,
    height: 36,
    marginTop: -18,
    alignSelf: 'center',
    borderRadius: 100,
  },
  inputemail: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 48,
    width: 288,
    alignSelf: 'center',
    marginTop: 38,
    borderRadius: 5,
    backgroundColor: 'white',
    borderColor: '#002558',
    borderWidth: 0.5,
    opacity: 10,
  },
  inputpassword: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 48,
    width: 288,
    alignSelf: 'center',
    marginTop: 24,
    borderRadius: 5,
    backgroundColor: 'white',
    borderColor: '#002558',
    borderWidth: 0.5,
    opacity: 10,
  },
  resetpassword: {
    fontStyle: 'italic',
    color: '#287AE5',
    textAlign: 'right',
    marginRight: 16,
    marginTop: 10,
    fontSize: 14,
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
