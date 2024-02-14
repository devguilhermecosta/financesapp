import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthRoute from './src/components/AuthRoute';
import AuthProvider from './src/context';

export default function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <AuthProvider>
        <AuthRoute />
      </AuthProvider>
    </NavigationContainer>
  )
}
