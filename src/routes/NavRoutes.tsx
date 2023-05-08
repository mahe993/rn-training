import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import SumEvenScreen from '../screens/SumEvenScreen';
import NoVowelsScreen from '../screens/NoVowelsScreen';
import DogPicture from '../screens/DogPicture';
import Timer from '../screens/Timer';
import MultiplyStringScreen from '../screens/MultipleStringScreen';
import AccountScreen from '../screens/AccountScreen';
import PalindromeScreen from '../screens/PalindromeScreen';
import SortScreen from '../screens/SortScreen';
import TodayScreen from '../screens/TodayScreen';
import QuestionsScreen from '../screens/QuestionsScreen';
import SearchScreen from '../screens/SearchScreen';
import ContactScreen from '../screens/ContactScreen';

const Stack = createStackNavigator();

const NavRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SumEven" component={SumEvenScreen} />
        <Stack.Screen name="NoVowels" component={NoVowelsScreen} />
        <Stack.Screen name="DogPic" component={DogPicture} />
        <Stack.Screen name="Timer" component={Timer} />
        <Stack.Screen name="MultiplyString" component={MultiplyStringScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Palindrome" component={PalindromeScreen} />
        <Stack.Screen name="Sort" component={SortScreen} />
        <Stack.Screen name="Today" component={TodayScreen} />
        <Stack.Screen name="Questions" component={QuestionsScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavRoutes;
