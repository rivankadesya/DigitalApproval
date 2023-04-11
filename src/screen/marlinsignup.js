import React, {useState} from 'react';
import styles from './styles';
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
  TextComponent,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const App: () => Node = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Image
        source={require('../img/marlin/logo.png')}
        style={styles.logo}></Image>
      <Text style={styles.textcreate}>Create an account</Text>
      <TextInput style={styles.textinput} placeholder="Name"></TextInput>
      <TextInput style={styles.textinput} placeholder="Email"></TextInput>
      <TextInput style={styles.textinput} placeholder="Phone"></TextInput>
      <TextInput style={styles.textinput} placeholder="Password"></TextInput>
      <TouchableOpacity
        style={styles.buttoncreate}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textbutton}>Sign up</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <View style={{alignSelf: 'center', marginTop: 10}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.footertext}>Already have account? </Text>
            <Text style={[styles.footertext, {fontWeight: 'bold'}]}>
              Log in
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default App;
