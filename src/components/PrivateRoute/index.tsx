import React from "react";
import { View } from "react-native";

export default function PrivateRoute({ children }: { children: React.JSX.Element }): React.JSX.Element {
  const user = true;

  return (
    user ? children : <View />
  )
}