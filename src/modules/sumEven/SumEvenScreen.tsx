import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {sumEven} from '../../utils';

const SumEvenScreen = () => {
  const [input, setInput] = useState('');
  const [sum, setSum] = useState<number>();

  const handleButtonPress = (args: string): void => {
    const total = sumEven(args);
    setSum(total);
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text>Please enter the values you would like to sum:</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'black',
          borderWidth: 1,
          width: '100%',
        }}
        onChangeText={e => setInput(e)}
        value={input}
        placeholder="1 3 4 5 6 10"
      />
      {sum && <Text>sum of all even numbers: {sum}</Text>}
      <Button
        disabled={!input}
        title="Sum!"
        onPress={() => handleButtonPress(input)}
      />
    </View>
  );
};

export default SumEvenScreen;
