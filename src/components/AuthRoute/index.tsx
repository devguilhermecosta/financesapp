import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInPage from "../../pages/SignIn";
import SignUpPage from "../../pages/SignUp";
import Home from "../../pages/Home";

const Stack = createNativeStackNavigator();

export default function AuthRoute(): React.JSX.Element {

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

      <Stack.Screen
        name='home'
        component={Home}
        options={{
          headerTitle: 'Home',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}
