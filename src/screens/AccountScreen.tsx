import {View, Text} from 'react-native';
import React, {useState} from 'react';
import AccountDetails from '../components/AccountDetails';
import AccountForm from '../components/AccountForm';

export interface User {
  name: string;
  email: string;
  age: number;
  phoneNumber?: number;
}

const AccountScreen = (): JSX.Element => {
  const [userDetails, setUserDetails] = useState<User>({
    name: 'Ma He',
    email: 'abc@milli.sg',
    age: 50,
  });

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold'}}>
        Account
      </Text>
      <AccountDetails userDetails={userDetails} />
      <AccountForm setUserDetails={setUserDetails} />
    </View>
  );
};

export default AccountScreen;
