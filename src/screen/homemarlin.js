import React from 'react';
import styles from './styles';
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
import Icon from 'react-native-vector-icons/AntDesign';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../img/marlin/banner.png')}
        style={{width: '100%', height: 142}}
      />
      <View style={styles.loginwith}>
        <Image
          source={require('../img/marlin/ic_ferry_intl.png')}
          style={styles.iconhomepage}></Image>
        <Image
          source={require('../img/marlin/ic_ferry_domestic.png')}
          style={styles.iconhomepage}></Image>
        <Image
          source={require('../img/marlin/ic_attraction.png')}
          style={styles.iconhomepage}></Image>
        <Image
          source={require('../img/marlin/ic_pioneership.png')}
          style={styles.iconhomepage}></Image>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: '#2E3283',
          width: 108,
          height: 40,
          borderRadius: 10,
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'white',
            alignSelf: 'center',
          }}>
          More ....
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomePage;
