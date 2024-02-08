import React, { useContext, useEffect } from "react";
import Container from "../../components/Container";
import { Text } from "react-native";
import {} from '@react-navigation/native';
import { AuthContext } from "../../context";

export default function Home({ navigation }: { navigation: any }): React.JSX.Element {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    console.log('este é o user: ', user);
  }, [])

  if (!user) {
    return navigation.navigate('signin');
  }

  return (
    <Container>
      <Text>Home Page</Text>
    </Container>  
  )
}