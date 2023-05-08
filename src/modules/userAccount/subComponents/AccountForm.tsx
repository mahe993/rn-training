import {View, Text, StyleSheet, Button} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {User} from '../AccountScreen';

type Props = {
  setUserDetails: React.Dispatch<React.SetStateAction<User>>;
};

interface Input {
  name: string;
  email: string;
  age: string;
  phoneNumber: string;
}

interface Update {
  name?: string;
  email?: string;
  age?: number;
  phoneNumber?: number;
}

const AccountForm = ({setUserDetails}: Props) => {
  const [inputs, setInputs] = useState<Input>({
    name: '',
    email: '',
    age: '',
    phoneNumber: '',
  });
  const [update, setUpdate] = useState<Update>({});

  const handleInputChange = (id: string, data: string): void => {
    if (data === '') {
      // when user backspace, to delete key to prevent empty update
      const delEmptyUpdate: Update = {...update};
      delete delEmptyUpdate[id as keyof Update];
      setUpdate(delEmptyUpdate);
    } else if (id === 'age' || id === 'phoneNumber') {
      if (/^[0-9]*$/.test(data)) {
        setUpdate(prev => ({...prev, [id]: Number(data)}));
      }
    } else {
      setUpdate(prev => ({...prev, [id]: data}));
    }
    setInputs(prev => ({...prev, [id]: data}));
  };

  const handleButtonPress = (): void => {
    // this should technically be a PUT req
    // instead of setting the update state to userDetails
    // the returned data from PUT req should be used to set userDetails
    // returned data should be of the interface User
    // that would fix the need to have another interface Update
    setUserDetails(prev => ({...prev, ...update}));
  };

  return (
    <>
      <View style={[style.details, {marginTop: 20}]}>
        <Text style={[style.description]}>Name:</Text>
        <TextInput
          style={[style.input]}
          placeholder="alexander the great"
          placeholderTextColor="grey"
          value={inputs.name}
          onChangeText={change => handleInputChange('name', change)}
        />
      </View>
      <View style={[style.details]}>
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
        <Text style={[style.description]}>Age:</Text>
        <TextInput
          style={[style.input]}
          placeholder="65"
          placeholderTextColor="grey"
          value={inputs.age}
          onChangeText={change => handleInputChange('age', change)}
        />
      </View>
      <View style={[style.details]}>
        <Text style={[style.description]}>Phone No.:</Text>
        <TextInput
          style={[style.input]}
          placeholder="87654321"
          placeholderTextColor="grey"
          value={inputs.phoneNumber}
          onChangeText={change => handleInputChange('phoneNumber', change)}
        />
      </View>
      <Button title="UPDATE" onPress={handleButtonPress} />
    </>
  );
};

export default AccountForm;

const style = StyleSheet.create({
  details: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
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
    height: 40,
    borderColor: 'black',
    borderWidth: 0.5,
    width: '70%',
  },
});
