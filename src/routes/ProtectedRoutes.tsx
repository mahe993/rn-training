import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SumEvenScreen from '../modules/sumEven/SumEvenScreen';

const Stack = createStackNavigator();
const ProtectedRoutes = () => {
  return (
    <Stack.Group>
      <Stack.Screen name="SumEven" component={SumEvenScreen} />
    </Stack.Group>
  );
};

export default ProtectedRoutes;
