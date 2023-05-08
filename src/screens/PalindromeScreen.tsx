import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import {isPalindrome} from '../utils';
import {TextInput} from 'react-native-gesture-handler';

const PalindromeScreen = () => {
  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState<boolean>();

  const handleButtonPress = (args: string): void => {
    const check = isPalindrome(args);
    setAnswer(check);
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text>Please enter the string to check:</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'black',
          borderWidth: 1,
          width: '100%',
        }}
        onChangeText={e => setInput(e)}
        value={input}
        placeholder="hello world"
        placeholderTextColor="grey"
      />
      {answer ? (
        <Text style={{color: 'red'}}>ITS A PALINDROME!</Text>
      ) : (
        <Text style={{color: 'red'}}>Its not...</Text>
      )}
      <Button title="Palindrome?" onPress={() => handleButtonPress(input)} />
    </View>
  );
};

export default PalindromeScreen;
