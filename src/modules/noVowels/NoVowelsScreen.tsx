import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {removeVowels} from '../../utils';

const NoVowelsScreen = () => {
  const [input, setInput] = useState('');
  const [string, setString] = useState<string>();

  const handleButtonPress = (args: string): void => {
    const st = removeVowels(args);
    setString(st);
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text>Please enter the string to remove vowels from:</Text>
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
      {string && <Text>string with no vowels: {string}</Text>}
      <Button title="Vowel-less!" onPress={() => handleButtonPress(input)} />
    </View>
  );
};

export default NoVowelsScreen;
