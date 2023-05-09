import {View, Text} from 'react-native';
import React from 'react';
import LoginForm from './subComponents/LoginForm';

const LoginScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold'}}>
        Login
      </Text>
      <LoginForm />
    </View>
  );
};

export default LoginScreen;
