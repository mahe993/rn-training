import {View, Text} from 'react-native';
import React, {useState} from 'react';
import AccountDetails from '../userAccount/subComponents/AccountDetails';
import AccountForm from '../userAccount/subComponents/AccountForm';

export interface User {
  name: string;
  email: string;
  status: string;
  phoneNumber?: Array<string>;
}

const RegisterScreen = (): JSX.Element => {
  const [userDetails, setUserDetails] = useState<User>({
    name: 'Ma He',
    email: 'abc@milli.sg',
    status: 'happy',
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

export default RegisterScreen;
