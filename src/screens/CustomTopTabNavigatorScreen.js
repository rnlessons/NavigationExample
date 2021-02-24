import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CustomTobTabBar from '../components/CustomTopTabBar';

const Tab = createMaterialTopTabNavigator();

const Screen = ({route, navigation}) => {
  return (
    <>
      <Text style={styles.title}>Route Name: {route.name}</Text>
    </>
  );
};

export default function MyTabs() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Tab.Navigator tabBar={(props) => <CustomTobTabBar {...props} />}>
        <Tab.Screen name="TopTab1" component={Screen} />
        <Tab.Screen name="TopTab2" component={Screen} />
        <Tab.Screen name="TopTab3" component={Screen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    padding: 20,
  },
});
