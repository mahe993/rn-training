import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import {sortAscending, sortDescending} from '../utils';
import {TextInput} from 'react-native-gesture-handler';

const SortScreen = () => {
  const [input, setInput] = useState('');
  const [split, setSplit] = useState('');

  const handleButtonPress = (type: 'asc' | 'desc'): void => {
    let sorted = input.split(' ');
    if (type === 'asc') {
      sortAscending(sorted);
    } else {
      sortDescending(sorted);
    }
    setSplit(`${sorted}`);
  };

  const onChange = (text: string): void => {
    setInput(text);
    const arr = text.split(' ');
    setSplit(`${arr}`);
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text>Please enter the array values space separated:</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'black',
          borderWidth: 1,
          width: '100%',
        }}
        onChangeText={e => onChange(e)}
        value={input}
        placeholder="hello world"
        placeholderTextColor="grey"
      />
      {input && <Text style={{color: 'red'}}>[{split}]</Text>}
      <Button title="Ascending" onPress={() => handleButtonPress('asc')} />
      <Button title="Descending" onPress={() => handleButtonPress('desc')} />
    </View>
  );
};

export default SortScreen;
