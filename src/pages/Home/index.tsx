import React, { useContext } from "react";
import Container from "../../components/Container";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { AuthContext } from "../../context";
import { SimpleLineIcons } from '@expo/vector-icons';
import SignInPage from "../SignIn";


export default function Home({ navigation }: { navigation?: any }): React.JSX.Element {
  const { user, handleLogout } = useContext(AuthContext);

  return !user
  ? <SignInPage />
  : (
    <Container>
      <TouchableOpacity style={styles.logout} onPress={handleLogout}>
        <Text>logout</Text>
        <SimpleLineIcons name="logout" size={24}/>
      </TouchableOpacity>

      <Text>Home Page</Text>
    </Container>  
  )
}


const styles = StyleSheet.create({
  logout: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 10,
  }
})