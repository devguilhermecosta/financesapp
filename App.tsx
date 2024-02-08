import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthRoute from './src/components/AuthRoute';
import AuthProvider from './src/context';

export default function App(): React.JSX.Element {
  return (
    <NavigationContainer >
      <AuthProvider>
        <StatusBar backgroundColor='#f0f4ff' barStyle='dark-content'/>
        <AuthRoute />
      </AuthProvider>
    </NavigationContainer>
  )
}
