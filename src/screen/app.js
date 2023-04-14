// In App.js in a new project

import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SigninMarlin from './marlinsignin';
import SignupMarlin from './marlinsignup';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
