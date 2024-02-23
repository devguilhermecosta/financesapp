import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthRoute from './src/components/AuthRoute';
import AuthProvider from './src/context';
import { StatusBar } from 'react-native';

export default function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar 
          animated={true} 
          backgroundColor='#F0F4FF' 
          barStyle='dark-content'
          showHideTransition='fade'
        />
        <AuthRoute />
      </AuthProvider>
    </NavigationContainer>
  )
}
