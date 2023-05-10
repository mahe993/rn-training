import {createStackNavigator} from '@react-navigation/stack';
import DogPicture from '../modules/dogPicture/DogPicture';
import React from 'react';

const Stack = createStackNavigator();
const AuthenticatedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DogPic" component={DogPicture} />
    </Stack.Navigator>
  );
};

export default AuthenticatedStack;
