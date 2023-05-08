import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {DEV_URL} from '@env';
import {SearchData} from '../interfaces';

const SearchScreen = () => {
  const [data, setData] = useState<Array<SearchData>>([]);
  const [input, setInput] = useState<string>('');

  const handleChange = async (e: string): Promise<void> | never => {
    setInput(e);
    try {
      if (e === '') {
        setData([]);
        return;
      }
      const res = await fetch(`${DEV_URL}/users?val=${e}`);
      const resData = await res.json();
      if (!resData.length) {
        setData([{name: 'No such persons', team: 'N.A.'}]);
      } else {
        setData(resData);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold'}}>
        Search users:
      </Text>
      <TextInput
        placeholder="alexander the great"
        placeholderTextColor="grey"
        value={input}
        onChangeText={handleChange}
        style={{marginBottom: 20}}
      />
      {!!input && (
        <View style={[style.dataContainer]}>
          <Text style={[style.dataValue, style.dataHeader]}>Name</Text>
          <Text style={[style.dataValue, style.dataHeader]}>Team</Text>
        </View>
      )}
      {!!input && !data.length && <ActivityIndicator style={{marginTop: 30}} />}
      {!!data.length &&
        data.map((d, i) => (
          <View key={i} style={[style.dataContainer]}>
            <Text style={[style.dataValue]}>{d.name}</Text>
            <Text style={[style.dataValue]}>{d.team}</Text>
          </View>
        ))}
    </View>
  );
};

export default SearchScreen;

const style = StyleSheet.create({
  dataHeader: {
    color: 'black',
  },
  dataValue: {
    flex: 1,
    textAlign: 'center',
  },
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    height: 'auto',
  },
});
