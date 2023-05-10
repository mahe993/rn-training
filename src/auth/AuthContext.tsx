/* eslint-disable curly */
import React, {useContext, useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';

interface AuthContextProps {
  children: React.ReactNode;
}

const AuthContext = React.createContext({});

export const AuthContextProvider = ({children}: AuthContextProps) => {
  const [userDetails, setUserDetails] = useState<any>(); // what should the type be?
  const [initializingFirebase, setInitializingFirebase] =
    useState<boolean>(false);

  // Handle user state changes
  // param type of any is wrong here too
  const onAuthStateChanged = (user: any) => {
    setUserDetails(user);
    if (initializingFirebase) setInitializingFirebase(false);
  };

  useEffect(() => {
    // subscribe on mount
    const unsubscribe = auth().onAuthStateChanged(onAuthStateChanged);
    // unsubscribe on unmount
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (initializingFirebase) return null;

  return (
    <AuthContext.Provider value={userDetails}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  return context;
};
