import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Navigation from './src/navigation/Navigation';
import { AuthProvider } from './src/Context/AuthContext';

const App = () =>{
  return(
    <NavigationContainer>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </NavigationContainer>    
  )
}

export default App;
