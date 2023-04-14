// In App.js in a new project

import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyTabs from './bottomNav';
import SignupMarlin from './marlinsignup';
import SigninMarlin from './marlinsignin';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Signup"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Signup"
          component={SignupMarlin}
          options={{title: 'Overview', headerShown: false}}
        />
        <Stack.Screen
          name="Signin"
          component={SigninMarlin}
          options={{title: 'Overview', headerShown: false}}
        />
        <Stack.Screen
          name="bottom"
          component={MyTabs}
          screenOptions={{headerShown: false}}
          // options={{title: 'Overview'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
