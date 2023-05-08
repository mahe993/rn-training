import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../types';

const Tasks = (): JSX.Element => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate('Questions')}>
        <Text style={[styles.text]}>Questions</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SumEven')}>
        <Text style={[styles.text]}>Sum Even</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('NoVowels')}>
        <Text style={[styles.text]}>No Vowels</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('DogPic')}>
        <Text style={[styles.text]}>Dog Picture</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Timer')}>
        <Text style={[styles.text]}>Timer</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MultiplyString')}>
        <Text style={[styles.text]}>Multiply String</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Account')}>
        <Text style={[styles.text]}>Account</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Palindrome')}>
        <Text style={[styles.text]}>Palindrome</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Sort')}>
        <Text style={[styles.text]}>Sort Array</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Today')}>
        <Text style={[styles.text]}>Today</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <Text style={[styles.text]}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
        <Text style={[styles.text]}>Contact Us</Text>
      </TouchableOpacity>
    </>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 20,
  },
});
