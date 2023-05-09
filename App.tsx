import React from 'react';
import NavRoutes from './src/routes/NavRoutes';
import {AuthContextProvider} from './src/auth/AuthContext';

const App = () => {
  return (
    <AuthContextProvider>
      <NavRoutes />
    </AuthContextProvider>
  );
};

export default App;
