import React, {useEffect} from 'react';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {useRoute} from '@react-navigation/native';

import {SafeAreaView, Text, Button, StyleSheet} from 'react-native';

enableScreens();
const Stack = createNativeStackNavigator();

const Custom = (props) => {
  const route = useRoute();
  return (
    <Text style={styles.title}>
      Route Params from useRoute: {route.params?.data}
    </Text>
  );
};

const Screen = ({route, navigation}) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // do something on event
      console.log('focused');
    });

    return () => {
      console.log('unsubscribe');
      unsubscribe();
    };
  }, [navigation]);

  return (
    <>
      <Text style={styles.title}>Route Name: {route.name}</Text>
      <Text style={styles.title}>Route Params: {route.params?.data}</Text>
      <Custom />
      <Button
        title="Home"
        onPress={() => {
          navigation.navigate('Home', {data: 'one'});
        }}
      />
      <Button
        title="Notifications"
        onPress={() => {
          navigation.navigate('Notifications', {data: 'two'});
        }}
      />
      <Button
        title="Profile"
        onPress={() => {
          navigation.navigate('Profile', {data: 'three'});
        }}
      />
      <Button
        title="Settings"
        onPress={() => {
          navigation.navigate('Settings', {data: 'four'});
        }}
      />

      <Button
        title="Login"
        style={{marginTop: 50}}
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </>
  );
};

export default function StackNavigatorScreen({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Notifications">
      <Stack.Screen name="Home" component={Screen} />
      <Stack.Screen name="Notifications" component={Screen} />
      <Stack.Screen name="Profile" component={Screen} />
      <Stack.Screen name="Settings" component={Screen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    padding: 20,
  },
});
