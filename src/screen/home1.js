import React from 'react';
import styles from './styles';
import {
  StyleSheet,
  Dimensions,
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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';

const Home1Page = () => {
  const isCarousel = React.useRef(null);
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#2E3283', '#243FA1', '#243FA1']}
        style={{height: 248, width: '100%'}}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../img/marlin/whitelogo.png')}
            style={{width: 96, height: 21, margin: 15}}
          />
          <View style={{margin: 15, right: 10, position: 'absolute'}}>
            <Ionicons name="notifications-sharp" color={'white'} size={20} />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: 339,
            alignSelf: 'center',
            marginTop: 15,
          }}>
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 40,
              backgroundColor: 'white',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                alignSelf: 'center',
                textAlignVertical: 'center',
                fontWeight: 'bold',
                fontSize: 20,
                color: '2E3283',
              }}>
              RD
            </Text>
          </View>

          <View style={{marginLeft: 10}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontWeight: '300', color: 'white'}}>Welcome, </Text>
              <Text style={{fontWeight: '450', color: 'white'}}>
                Rivanka Desya
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{marginTop: 2}}>
                <Icon name="wallet" size={19} color={'white'} />
              </View>
              <Text
                style={{
                  color: 'white',
                  fontWeight: '100',
                  textAlignVertical: 'center',
                  marginLeft: 5,
                }}>
                Rp.
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontWeight: '100',
                  textAlignVertical: 'center',
                  marginLeft: 5,
                }}>
                30000
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.martinpoint}>
        <LinearGradient colors={['#2E3283', '#514EBC']} style={styles.banner}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignContent: 'center',
              height: '100%',
              width: '100%',
            }}>
            <Image
              source={require('../img/marlin/bannerslider.png')}
              style={{marginTop: 30}}
            />
            <View
              style={{
                marginLeft: 60,
                textAlign: 'right',
                height: '100%',
                width: 110,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'right',
                  fontSize: 13,
                  fontWeight: 'bold',
                }}>
                Naik Kapal Ferry
              </Text>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'right',
                  fontSize: 29,
                  fontWeight: 'bold',
                }}>
                GRATIS
              </Text>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'right',
                  fontSize: 8,
                  fontWeight: '100',
                }}>
                Tapi bohong wkwk
              </Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

const CarouselCardItem = ({item, index}) => {
  return (
    <View style={styles1.container} key={index}>
      <Image source={{uri: item.imgUrl}} style={styles1.image} />
      <Text style={styles1.header}>{item.title}</Text>
      <Text style={styles1.body}>{item.body}</Text>
    </View>
  );
};
const styles1 = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: '90%',
    paddingBottom: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: '100%',
    height: 300,
  },
  header: {
    color: '#222',
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: '#222',
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default Home1Page;
