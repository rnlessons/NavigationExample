import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import StackNavigatorScreen from './StackNavigatorScreen';

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Tab2"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{backgroundColor: '#694fad'}}>
      <Tab.Screen name="Tab1" component={StackNavigatorScreen} />
      <Tab.Screen name="Tab2" component={StackNavigatorScreen} />
      <Tab.Screen name="Tab3" component={StackNavigatorScreen} />
      <Tab.Screen name="Tab4" component={StackNavigatorScreen} />
    </Tab.Navigator>
  );
}
