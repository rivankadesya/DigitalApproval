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
  ScrollView,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const App: () => Node = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={require('../img/marlin/logo.png')}
          style={styles.logo}></Image>
        <Text style={styles.textcreate}> Please sign in to continue</Text>
        <TextInput style={styles.textinput} placeholder="Username"></TextInput>

        <View style={[styles.textinput, {flexDirection: 'row'}]}>
          <TextInput placeholder="Password"></TextInput>
          <Image
            source={require('../img/marlin/eye.png')}
            style={styles.eyespassword}></Image>
        </View>

        <TouchableOpacity style={styles.buttoncreate}>
          <Text style={styles.textbutton}>Sign in</Text>
        </TouchableOpacity>

        <Text style={styles.forgotpassword}>Forgot Password</Text>

        <View style={[styles.loginwith, {marginTop: '10%'}]}>
          <View style={styles.loginwithline}></View>
          <Text style={styles.loginwithtext}>Login with</Text>
          <View style={styles.loginwithline}></View>
        </View>

        <View style={styles.loginwith}>
          <Image
            source={require('../img/marlin/facebook.png')}
            style={styles.socialmediaicon}></Image>
          <Image
            source={require('../img/marlin/google.png')}
            style={styles.socialmediaicon}></Image>
        </View>
        <View style={[styles.loginwith, {marginTop: '10%'}]}>
          <Text style={{margin: 25}}>App Version</Text>
          <Text style={{margin: 25}}>2.8.3</Text>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footertext}>Don't have account? </Text>
        <Text style={[styles.footertext, {fontWeight: 'bold'}]}>Sign Up</Text>
      </View>
    </View>
  );
};

export default App;
