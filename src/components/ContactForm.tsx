import {View, Text, StyleSheet, Button, Alert, Keyboard} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {DEV_URL} from '@env';

interface Input {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [inputs, setInputs] = useState<Input>({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (id: string, data: string): void => {
    setInputs(prev => ({...prev, [id]: data}));
  };

  const handleButtonPress = async (): Promise<void> => {
    try {
      await fetch(`${DEV_URL}/users/contact`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      });

      Alert.alert(
        'Success',
        'Your message is received. Our team will get back to you within 3 business days!',
        [
          {
            text: 'OK',
            onPress: () => {
              console.log('hi');
              setInputs({name: '', email: '', message: ''});
              Keyboard.dismiss();
            },
          },
        ],
      );
    } catch (err) {
      console.error(err);
    }
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
        <Text style={[style.description]}>Message:</Text>
        <TextInput
          multiline={true}
          numberOfLines={5}
          textAlignVertical="top"
          style={[style.input]}
          placeholder="I want to complain about your app!"
          placeholderTextColor="grey"
          value={inputs.message}
          onChangeText={change => handleInputChange('message', change)}
        />
      </View>
      <Button title="contact" onPress={handleButtonPress} />
    </>
  );
};

export default ContactForm;

const style = StyleSheet.create({
  details: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  text: {
    minWidth: 150,
  },
  description: {
    color: 'black',
    minWidth: 70,
    minHeight: 40,
    textAlignVertical: 'center',
    textAlign: 'right',
  },
  input: {
    borderColor: 'black',
    borderWidth: 0.5,
    width: '70%',
  },
});
