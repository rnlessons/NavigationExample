import React from 'react';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackNavigatorScreen from './StackNavigatorScreen';
import MaterialTopTabNavigatorScreen from './MaterialTopTabNavigatorScreen';
import LoginScreen from './LoginScreen';

enableScreens();
const Stack = createNativeStackNavigator();

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Tab1" component={MaterialTopTabNavigatorScreen} />
      <BottomTab.Screen name="Tab2" component={StackNavigatorScreen} />
      <BottomTab.Screen name="Tab3" component={StackNavigatorScreen} />
      <BottomTab.Screen name="Tab4" component={StackNavigatorScreen} />
    </BottomTab.Navigator>
  );
}

export default function PopLoginScreen({navigation}) {
  return (
    <Stack.Navigator initialRouteName="MainTab">
      <Stack.Screen name="MainTab" component={BottomTabNavigator} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
