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
import SigninMarlin from './marlinsignin';
import {ScrollView} from 'react-native-gesture-handler';
import Geolocation from '@react-native-community/geolocation';

const SignupMarlin = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
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
          onPress={
            (() => setModalVisible(true), () => navigation.navigate('Signin'))
          }>
          <Text style={styles.textbutton}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttoncreate}
          onPress={() => {
            Geolocation.setRNConfiguration();
            Geolocation.getCurrentPosition(info => console.log(info));
          }}>
          <Text style={styles.textbutton}>GEO</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.footer}>
        <View style={{alignSelf: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.footertext}>Already have account? </Text>
            <TouchableOpacity
              style={{justifyContent: 'center'}}
              onPress={() => navigation.navigate('Signin')}>
              <Text style={[styles.footertext, {fontWeight: 'bold'}]}>
                Log in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignupMarlin;
