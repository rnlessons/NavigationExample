import React from 'react';
import {ScrollView, Button} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialTopTabNavigatorScreen from './MaterialTopTabNavigatorScreen';
import LoginScreen from './LoginScreen';

import group1 from './group1';
import group2 from './group2';
import group3 from './group3';

const screens = {
  ...group1,
  ...group2,
  ...group3,
};

enableScreens();
const Stack = createNativeStackNavigator();

const BottomTab = createBottomTabNavigator();

const TabScreen = ({navigation}) => {
  return (
    <ScrollView>
      {Object.entries(screens).map(([name]) => (
        <Button
          title={name}
          onPress={() => {
            navigation.navigate(name);
          }}
        />
      ))}
    </ScrollView>
  );
};

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Tab1" component={MaterialTopTabNavigatorScreen} />
      <BottomTab.Screen name="Tab2" component={TabScreen} />
      <BottomTab.Screen name="Tab3" component={TabScreen} />
      <BottomTab.Screen name="Tab4" component={TabScreen} />
    </BottomTab.Navigator>
  );
};

export default function PopLoginScreen({navigation}) {
  return (
    <Stack.Navigator initialRouteName="MainTab">
      <Stack.Screen name="MainTab" component={BottomTabNavigator} />
      <Stack.Screen name="Login" component={LoginScreen} />
      {Object.entries(screens).map(([name, component]) => (
        <Stack.Screen name={name} key={name} component={component} />
      ))}
    </Stack.Navigator>
  );
}
