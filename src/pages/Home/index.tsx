import React, { useContext, useEffect } from "react";
import Container from "../../components/Container";
import { Text } from "react-native";
import { AuthContext } from "../../context";

export default function Home({ navigation }: { navigation?: any }): React.JSX.Element {
  const { user } = useContext(AuthContext);

  if (!user) {
    return navigation.navigate('signin');
  }

  return (
    <Container>
      <Text>Home Page</Text>
    </Container>  
  )
}
