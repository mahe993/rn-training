import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import RegisterScreen from '../RegisterScreen';

const Stack = createStackNavigator();

const RegistrationStack = () => {
  return (
    <Stack.Navigator initialRouteName="Register">
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="UserDetails" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default RegistrationStack;
