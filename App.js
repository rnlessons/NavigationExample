import 'react-native-gesture-handler';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import {
  StackNavigatorScreen,
  NativeStackNavigatorScreen,
  MaterialTopTabNavigatorScreen,
  MaterialBottomTabNavigatorScreen,
  BottomTabNavigatorScreen,
} from './src/screens';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="StackNavigator">
        <Drawer.Screen name="StackNavigator" component={StackNavigatorScreen} />
        <Drawer.Screen
          name="NativeStackNavigator"
          component={NativeStackNavigatorScreen}
        />
        <Drawer.Screen
          name="MaterialTopTabNavigator"
          component={MaterialTopTabNavigatorScreen}
        />
        <Drawer.Screen
          name="MaterialBottomTabNavigator"
          component={MaterialBottomTabNavigatorScreen}
        />
        <Drawer.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigatorScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
