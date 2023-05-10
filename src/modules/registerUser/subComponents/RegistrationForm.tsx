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
import auth from '@react-native-firebase/auth';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {HomeScreens, RootStackParamList} from '../../../types';

interface RegistrationInput {
  email: string;
  password: string;
}

const RegistrationForm = () => {
  const [inputs, setInputs] = useState<RegistrationInput>({
    email: '',
    password: '',
  });
  const [hidePassword, setHidePassword] = useState(true);

  const navigate: NavigationProp<RootStackParamList> = useNavigation();

  const handleInputChange = (id: string, data: string): void => {
    setInputs(prev => ({...prev, [id]: data}));
  };

  const handleRegisterButtonPress = async (): Promise<void> => {
    // if either field is blank, do not allow registration
    if (!inputs.password || !inputs.email) {
      return Alert.alert(
        'Additional information required',
        'Email and password are required fields!',
        [
          {
            text: 'OK',
          },
        ],
      );
    }
    try {
      // create the user
      await auth().createUserWithEmailAndPassword(
        inputs.email,
        inputs.password,
      );

      // upon success, direct user back to home page
      navigate.navigate(HomeScreens.HOME);

      // create the user in collections here using endpoint
      // set the user auth details in AuthContext
    } catch (err: any) {
      if (err.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (err.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

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
          value={inputs.email}
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
          value={inputs.password}
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
