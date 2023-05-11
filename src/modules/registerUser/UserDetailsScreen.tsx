import {View, Text} from 'react-native';
import React from 'react';
import UserDetailsForm from './subComponents/UserDetailsForm';

export interface User {
  name: string;
  email: string;
  status: string;
  phoneNumber?: Array<string>;
}

const UserDetailsScreen = (): JSX.Element => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold'}}>
        Register
      </Text>
      <UserDetailsForm />
    </View>
  );
};

export default UserDetailsScreen;
