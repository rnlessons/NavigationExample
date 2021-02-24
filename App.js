import 'react-native-gesture-handler';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import {
  StackNavigatorScreen,
  MaterialTopTabNavigatorScreen,
  MaterialBottomTabNavigatorScreen,
  BottomTabNavigatorScreen,
  CustomTopTabNavigatorScreen,
  CustomBottomTabNavigatorScreen,
  PopLoginScreen,
  AllNavigatorScreen,
} from './src/screens';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="CustomBottomTabNavigatorScreen">
        <Drawer.Screen name="StackNavigator" component={StackNavigatorScreen} />
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
        <Drawer.Screen
          name="CustomTopTabNavigatorScreen"
          component={CustomTopTabNavigatorScreen}
        />
        <Drawer.Screen
          name="CustomBottomTabNavigatorScreen"
          component={CustomBottomTabNavigatorScreen}
        />
        <Drawer.Screen name="PopLoginScreen" component={PopLoginScreen} />
        <Drawer.Screen
          name="AllNavigatorScreen"
          component={AllNavigatorScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
