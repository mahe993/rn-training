import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {UserCreationParams} from '../RegisterScreen';

interface UserDetailsFormProps {
  setUserInfoInputs: React.Dispatch<React.SetStateAction<UserCreationParams>>;
  userInfoInputs: UserCreationParams;
  setCurrStep: React.Dispatch<React.SetStateAction<number>>;
}

const UserDetailsForm = ({
  setUserInfoInputs,
  userInfoInputs,
  setCurrStep,
}: UserDetailsFormProps) => {
  const handleInputChange = (
    id: keyof UserCreationParams,
    data: string,
  ): void => {
    setUserInfoInputs(prev => ({...prev, [id]: data}));
  };

  const handleNextButtonPress = async (): Promise<void> => {
    // if either field is blank, do not allow next step
    if (!userInfoInputs.name || !userInfoInputs.phoneNumber) {
      return Alert.alert(
        'Additional information required',
        'All fields are required fields!',
        [
          {
            text: 'OK',
          },
        ],
      );
    }
    // go next step
    setCurrStep(2);
  };

  return (
    <>
      <View style={[style.details, {marginTop: 20}]}>
        <Text style={[style.description]}>Name:</Text>
        <TextInput
          style={[style.input]}
          placeholder="Maheeeeeeee"
          placeholderTextColor="grey"
          value={userInfoInputs.name}
          onChangeText={change => handleInputChange('name', change)}
        />
      </View>
      <View style={[style.details]}>
        <Text style={[style.description]}>Phone no.:</Text>
        <TextInput
          style={[style.input]}
          placeholder="81234567"
          placeholderTextColor="grey"
          value={userInfoInputs.phoneNumber}
          onChangeText={change => handleInputChange('phoneNumber', change)}
        />
      </View>
      <Button title="Next" onPress={handleNextButtonPress} />
    </>
  );
};

export default UserDetailsForm;

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
