import React, { useState, useContext } from "react";
import { Image } from "react-native";
import CustomTextInput from "../../components/TextInput";
import SubmitButton from "../../components/SubmitButton";
import Container from "../../components/Container";
import styled from 'styled-components/native';
import { AuthContext } from "../../context";


export default function SignInPage({ navigation }: { navigation?: any } ): React.JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { handleLogin } = useContext(AuthContext);

  return (
    <Container>
      <Image source={require('../../../assets/images/Logo.png')}/>
      <CustomTextInput 
        placeholder="Username" 
        value={username} 
        onChangeValue={(text) => setUsername(text)}
      />
      <CustomTextInput
        secureTextEntry={true}
        placeholder="Password"
        value={password}
        onChangeValue={(text) => setPassword(text)}
      />
      <SubmitButton text="Sign In" onPress={() => handleLogin(username, password)}/>

      <Text onPress={() => navigation.navigate('signup')}>Register now!</Text>
    </Container>
  )
}

const Text = styled.Text`
  margin-top: 10px;
  color: #000;
  font-weight: 600;
`