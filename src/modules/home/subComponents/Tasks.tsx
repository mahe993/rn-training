import {Alert, StyleSheet, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {HomeScreens, RootStackParamList} from '../../../types';
import auth from '@react-native-firebase/auth';

const Tasks = (): JSX.Element => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const handleLogOut = async () => {
    try {
      await auth().signOut();
      Alert.alert('Logged out successfully!');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.navigate(HomeScreens.QUESTIONS)}>
        <Text style={[styles.text]}>Questions</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(HomeScreens.SUMEVEN)}>
        <Text style={[styles.text]}>Sum Even</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(HomeScreens.NOVOWELS)}>
        <Text style={[styles.text]}>No Vowels</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(HomeScreens.DOGPIC)}>
        <Text style={[styles.text]}>Dog Picture</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(HomeScreens.TIMER)}>
        <Text style={[styles.text]}>Timer</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(HomeScreens.MULTIPLYSTRING)}>
        <Text style={[styles.text]}>Multiply String</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(HomeScreens.ACCOUNT)}>
        <Text style={[styles.text]}>Account</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(HomeScreens.PALINDROME)}>
        <Text style={[styles.text]}>Palindrome</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(HomeScreens.SORT)}>
        <Text style={[styles.text]}>Sort Array</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(HomeScreens.TODAY)}>
        <Text style={[styles.text]}>Today</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(HomeScreens.SEARCH)}>
        <Text style={[styles.text]}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(HomeScreens.CONTACT)}>
        <Text style={[styles.text]}>Contact Us</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogOut}>
        <Text style={[styles.text]}>Logout</Text>
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
