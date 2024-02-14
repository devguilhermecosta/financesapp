import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInPage from '../../pages/SignIn';
import SignUpPage from '../../pages/SignUp';

const Stack = createNativeStackNavigator();

export default function AppRoute(): React.JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#daf1f1',
        },
        statusBarColor: '#daf1f1',
        statusBarStyle: 'dark',
      }}
    >

      <Stack.Screen
        name='signin'
        component={SignInPage}
        options={{
          headerTitle: 'Sign In',
          headerShown: false,
        }}
      />

      <Stack.Screen
        name='signup'
        component={SignUpPage}
        options={{
          title: 'Sign Up',
          headerStyle: {
            backgroundColor: "#1661c4",
          },
          headerTintColor: "#fff",
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  )
}
