import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../modules/home/HomeScreen';
import SumEvenScreen from '../modules/sumEven/SumEvenScreen';
import NoVowelsScreen from '../modules/noVowels/NoVowelsScreen';
import DogPicture from '../modules/dogPicture/DogPicture';
import Timer from '../modules/timer/Timer';
import MultiplyStringScreen from '../modules/mutipleString/MultipleStringScreen';
import AccountScreen from '../modules/userAccount/AccountScreen';
import PalindromeScreen from '../modules/palindrome/PalindromeScreen';
import SortScreen from '../modules/sort/SortScreen';
import TodayScreen from '../modules/today/TodayScreen';
import QuestionsScreen from '../modules/questions/QuestionsScreen';
import SearchScreen from '../modules/search/SearchScreen';
import ContactScreen from '../modules/contactUs/ContactScreen';
import RegisterScreen from '../modules/registerUser/RegisterScreen';
import LoginScreen from '../modules/login/LoginScreen';

const Stack = createStackNavigator();

const NavRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="DogPic" component={DogPicture} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SumEven" component={SumEvenScreen} />
        <Stack.Screen name="NoVowels" component={NoVowelsScreen} />
        <Stack.Screen name="Timer" component={Timer} />
        <Stack.Screen name="MultiplyString" component={MultiplyStringScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Palindrome" component={PalindromeScreen} />
        <Stack.Screen name="Sort" component={SortScreen} />
        <Stack.Screen name="Today" component={TodayScreen} />
        <Stack.Screen name="Questions" component={QuestionsScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavRoutes;
