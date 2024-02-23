import React, { useContext } from "react";
import { Text, TouchableOpacity, StyleSheet, StatusBar } from "react-native";
import { AuthContext } from "../../context";
import { SimpleLineIcons } from '@expo/vector-icons';
import { Background } from "./styles";
import Header from "../../components/Header";

export default function Home({ navigation }: { navigation?: any }): React.JSX.Element {
  const { handleLogout } = useContext(AuthContext);

  return(
    <Background>
      <Header title='My movements'/>
      <TouchableOpacity style={styles.logout} onPress={handleLogout}>
        <Text>logout</Text>
        <SimpleLineIcons name="logout" size={24}/>
      </TouchableOpacity>
    </Background>  
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