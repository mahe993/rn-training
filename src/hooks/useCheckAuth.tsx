import {useEffect} from 'react';
import {useAuthContext} from '../auth/AuthContext';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {HomeScreens, RootStackParamList} from '../types';

const useCheckAuth = () => {
  const userDetails = useAuthContext();
  console.log('hook log: ' + JSON.stringify(userDetails));
  const navigate: NavigationProp<RootStackParamList> = useNavigation();

  useEffect(() => {
    if (!userDetails) {
      navigate.navigate(HomeScreens.LOGIN);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userDetails]);
};

export default useCheckAuth;
