import {View, Text} from 'react-native';
import React, {useState} from 'react';
import RegistrationForm from './subComponents/RegistrationForm';
import UserDetailsForm from './subComponents/UserDetailsForm';

export interface User {
  name: string;
  email: string;
  status: string;
  phoneNumber?: Array<string>;
}

export interface RegistrationInput {
  email: string;
  password: string;
}

export interface UserCreationParams {
  email: string;
  name: string;
  phoneNumber: string;
}

const RegisterScreen = (): JSX.Element => {
  const [currStep, setCurrStep] = useState<number>(1);
  const [registrationInputs, setRegistrationInputs] =
    useState<RegistrationInput>({
      email: '',
      password: '',
    });
  const [userInfoInputs, setUserInfoInputs] = useState<UserCreationParams>({
    email: '',
    name: '',
    phoneNumber: '',
  });
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold'}}>
        Register
      </Text>
      {currStep === 1 ? (
        <UserDetailsForm
          userInfoInputs={userInfoInputs}
          setUserInfoInputs={setUserInfoInputs}
          setCurrStep={setCurrStep}
        />
      ) : (
        <RegistrationForm
          registrationInputs={registrationInputs}
          setRegistrationInputs={setRegistrationInputs}
          userInfoInputs={userInfoInputs}
          setUserInfoInputs={setUserInfoInputs}
          setCurrStep={setCurrStep}
        />
      )}
    </View>
  );
};

export default RegisterScreen;
