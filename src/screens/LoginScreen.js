import React, {useState} from 'react';

import {SafeAreaView, TextInput, Button, StyleSheet, Alert} from 'react-native';

const LoginScreen = ({route, navigation}) => {
  const [id, setId] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        placeholder="id"
        onChangeText={setId}
        value={id}
      />
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        placeholder="password"
        onChangeText={setPassword}
        value={password}
      />
      <Button
        title="Login"
        onPress={() => {
          // login logic
          const loginResult = true;

          if (loginResult) {
            navigation.pop();
          } else {
            Alert.alert('오류', '다시시도');
          }
        }}
      />
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    padding: 20,
  },
});
