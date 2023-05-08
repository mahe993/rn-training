import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {multiplyString} from '../utils';

const MultiplyStringScreen = () => {
  const [textInput, setTextInput] = useState('');
  const [numberInput, setNumberInput] = useState<string>('');
  const [string, setString] = useState<string>();

  const handleButtonPress = (text: string, num: string = '1'): void => {
    const multiplier = Number(num);
    let st = multiplyString(text, multiplier);
    setString(st);
  };

  const handleNumberInput = (args: string): void => {
    // Only allow numeric values
    if (/^[0-9]*$/.test(args)) {
      setNumberInput(args);
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text>Please enter string:</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'black',
          borderWidth: 1,
          width: '100%',
        }}
        onChangeText={e => setTextInput(e)}
        value={textInput}
        placeholder="hello world"
        placeholderTextColor="grey"
      />
      <Text>Please enter number:</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'black',
          borderWidth: 1,
          width: '100%',
        }}
        onChangeText={handleNumberInput}
        value={numberInput}
        placeholder="12345"
        placeholderTextColor="grey"
      />
      {string && <Text>string with no vowels: {string}</Text>}
      <Button
        title="Multiply!"
        onPress={() => {
          if (numberInput) {
            handleButtonPress(textInput, numberInput);
          } else {
            handleButtonPress(textInput);
          }
        }}
      />
    </View>
  );
};

export default MultiplyStringScreen;
