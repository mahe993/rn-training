import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {HomeScreens, RootStackParamList} from '../../../types';
import {registerUser} from '../../../auth/firebase/util';
import {DEV_URL} from '@env';

interface RegistrationInput {
  email: string;
  password: string;
}

interface UserCreationParams {
  email: string;
  name: string;
  phoneNumber: string;
}

const RegistrationForm = () => {
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
  const [hidePassword, setHidePassword] = useState(true);

  const navigate: NavigationProp<RootStackParamList> = useNavigation();

  const handleInputChange = (id: string, data: string): void => {
    if (id === 'email') {
      setUserInfoInputs(prev => ({...prev, [id]: data}));
    }
    setRegistrationInputs(prev => ({...prev, [id]: data}));
  };

  const handleRegisterButtonPress = async (): Promise<void> => {
    // if either field is blank, do not allow registration
    if (
      !registrationInputs.password ||
      !registrationInputs.email ||
      !userInfoInputs.name ||
      !userInfoInputs.phoneNumber
    ) {
      return Alert.alert(
        'Additional information required',
        'All fields required fields!',
        [
          {
            text: 'OK',
          },
        ],
      );
    }
    try {
      // register the user
      await registerUser(registrationInputs.email, registrationInputs.password);

      // upon success, direct user back to home page
      navigate.navigate(HomeScreens.HOME);

      // create the user in collections here using endpoint
      fetch(`${DEV_URL}/users`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfoInputs),
      });
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <>
      <View style={[style.details, {marginTop: 20}]}>
        <Text style={[style.description]}>Email:</Text>
        <TextInput
          style={[style.input]}
          placeholder="something@something.com"
          placeholderTextColor="grey"
          value={registrationInputs.email}
          onChangeText={change => handleInputChange('email', change)}
        />
      </View>
      <View style={[style.details]}>
        <Text style={[style.description]}>Password:</Text>
        <TextInput
          secureTextEntry={hidePassword}
          style={[style.input]}
          placeholder="12!@QwEr"
          placeholderTextColor="grey"
          value={registrationInputs.password}
          onChangeText={change => handleInputChange('password', change)}
        />
        <TouchableOpacity onPress={() => setHidePassword(prev => !prev)}>
          <Text style={[style.description, {minWidth: 0}]}>
            {hidePassword ? 'Show' : 'Hide'}
          </Text>
        </TouchableOpacity>
      </View>

      <Button title="Register" onPress={handleRegisterButtonPress} />
    </>
  );
};

export default RegistrationForm;

const style = StyleSheet.create({
  details: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  text: {
    minWidth: 150,
  },
  description: {
    minWidth: 70,
    minHeight: 40,
    textAlignVertical: 'center',
    textAlign: 'right',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'black',
    borderWidth: 0.5,
    width: '70%',
  },
});
