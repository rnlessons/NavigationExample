import React from 'react';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import BottomTabNavigatorScreen from './BottomTabNavigatorScreen';
import LoginScreen from './LoginScreen';

enableScreens();
const Stack = createNativeStackNavigator();

export default function PopLoginScreen({navigation}) {
  return (
    <Stack.Navigator initialRouteName="MainTab">
      <Stack.Screen name="MainTab" component={BottomTabNavigatorScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
