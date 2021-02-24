import React from 'react';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import {SafeAreaView, Text, Button, StyleSheet} from 'react-native';

enableScreens();
const Stack = createNativeStackNavigator();

const Screen = ({route}) => {
  return (
    <SafeAreaView>
      <Text style={styles.title}>{route.name}</Text>
      <Button title="Home" />
      <Button title="Notification" />
      <Button title="Profile" />
      <Button title="Settings" />
    </SafeAreaView>
  );
};

export default function StackNavigatorScreen({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Screen} />
      <Stack.Screen name="Notifications" component={Screen} />
      <Stack.Screen name="Profile" component={Screen} />
      <Stack.Screen name="Settings" component={Screen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 20,
    padding: 20,
  },
});
