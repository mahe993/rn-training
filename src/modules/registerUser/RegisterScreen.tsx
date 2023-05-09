import {View, Text} from 'react-native';
import React from 'react';
import RegistrationForm from './subComponents/RegistrationForm';

export interface User {
  name: string;
  email: string;
  status: string;
  phoneNumber?: Array<string>;
}

const RegisterScreen = (): JSX.Element => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold'}}>
        Register
      </Text>
      <RegistrationForm />
    </View>
  );
};

export default RegisterScreen;
