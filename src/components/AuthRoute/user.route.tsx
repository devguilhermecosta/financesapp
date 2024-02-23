import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "../../pages/Home";

const Drawer = createDrawerNavigator();

export default function UserRoute(): React.JSX.Element {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,

        drawerStyle: {
          backgroundColor: '#FFF',
          paddingTop: 20,
        },

        drawerActiveBackgroundColor: '#3b3dbf',
        drawerActiveTintColor: '#FFF',
  
        drawerInactiveBackgroundColor: '#F0F2FF',
        drawerInactiveTintColor: '#121212',
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
      /> 
    </Drawer.Navigator>
  )
}
