import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "../../pages/Home";

const Drawer = createDrawerNavigator();

export default function UserRoute(): React.JSX.Element {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#daf1f1',
        }
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
      />
  
    </Drawer.Navigator>
  )
}
