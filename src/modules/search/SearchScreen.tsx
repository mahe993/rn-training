import {View, Text, ActivityIndicator, StyleSheet, Button} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {DEV_URL} from '@env';
import {UserData} from '../../interfaces';
import {getAccessToken} from '../../auth/firebase/util';

const SearchScreen = () => {
  const [data, setData] = useState<Array<UserData>>([]);
  const [input, setInput] = useState<string>('');

  const handleChange = async (e: string): Promise<void> | never => {
    setInput(e);
    try {
      if (e === '') {
        setData([]);
        return;
      }
      const res = await fetch(`${DEV_URL}/users?val=${e}`);
      const resData: Array<UserData> = await res.json();
      if (!resData.length) {
        setData([
          {
            name: 'No such persons',
            status: 'Happy',
            phoneNumber: 'n.a',
            email: 'n.a',
          },
        ]);
      } else {
        setData(resData);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleGetAllButtonPress = async () => {
    try {
      const accessToken = await getAccessToken();
      const res = await fetch(`${DEV_URL}/users/all`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const resData = await res.json();
      console.log(resData);
      setData(resData);
    } catch (err) {
      throw new Error();
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
      <View style={{marginBottom: 10}}>
        {(!!input || !!data.length) && (
          <View style={[style.dataContainer]}>
            <Text style={[style.dataValue, style.dataHeader]}>Name</Text>
            <Text style={[style.dataValue, style.dataHeader]}>Status</Text>
          </View>
        )}
        {!!input && !data.length && (
          <ActivityIndicator style={{marginTop: 30}} />
        )}
        {!!data.length &&
          data.map((d, i) => (
            <View key={i} style={[style.dataContainer]}>
              <Text style={[style.dataValue]}>{d.name}</Text>
              <Text style={[style.dataValue]}>{d.status}</Text>
            </View>
          ))}
      </View>

      <Button title="Get all users" onPress={handleGetAllButtonPress} />
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
