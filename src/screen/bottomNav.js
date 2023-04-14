import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Image} from 'react-native';
import HomePage from './homemarlin';
import SigninMarlin from './marlinsignin';
import Home1Page from './home1';
import Tugas3 from './tugas3';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function MyTabs(params) {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="HomePage">
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          //   tabBarLabel: 'Signupmarlin',
          tabBarIcon: ({color, size}) => (
            <Image source={require('../img/marlin/iconhome.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Signup"
        component={Home1Page}
        options={{
          //   tabBarLabel: 'home',
          tabBarIcon: ({color, size}) => (
            <Image source={require('../img/marlin/iconhome.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Tugas3"
        component={Tugas3}
        options={{
          //   tabBarLabel: 'home',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="notifications-sharp" color={'black'} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;
