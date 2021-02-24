import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackNavigatorScreen from './StackNavigatorScreen';
import CustomBottomTabBar from '../components/CustomBottomTabBar';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator tabBar={CustomBottomTabBar}>
      <Tab.Screen name="Tab1" component={StackNavigatorScreen} />
      <Tab.Screen name="Tab2" component={StackNavigatorScreen} />
      <Tab.Screen name="Tab3" component={StackNavigatorScreen} />
      <Tab.Screen name="Tab4" component={StackNavigatorScreen} />
    </Tab.Navigator>
  );
}
