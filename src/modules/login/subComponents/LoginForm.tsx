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
import {signInUser} from '../../../auth/firebase/util';

interface LoginDetails {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [inputs, setInputs] = useState<LoginDetails>({
    email: '',
    password: '',
  });
  const [hidePassword, setHidePassword] = useState(true);

  const navigate: NavigationProp<RootStackParamList> = useNavigation();

  const handleInputChange = (id: string, data: string): void => {
    setInputs(prev => ({...prev, [id]: data}));
  };

  const handleLoginButtonPress = async (): Promise<void> => {
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
      // login the user
      await signInUser(inputs.email, inputs.password);

      // upon success, direct user back to home page
      navigate.navigate(HomeScreens.HOME);
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

      <Button title="Login" onPress={handleLoginButtonPress} />
      <Button
        title="Register"
        onPress={() => {
          navigate.navigate(HomeScreens.REGISTER);
        }}
      />
    </>
  );
};

export default LoginForm;

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
