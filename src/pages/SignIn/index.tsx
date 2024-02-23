import React, { useState, useContext } from "react";
import { Image, Keyboard } from "react-native";
import CustomTextInput from "../../components/TextInput";
import SubmitButton from "../../components/SubmitButton";
import Container from "../../components/Container";
import styled from 'styled-components/native';
import { AuthContext } from "../../context";


export default function SignInPage({ navigation }: { navigation?: any } ): React.JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { handleLogin } = useContext(AuthContext);
  const [authLoading, setAuthLoading] = useState(false);

  const handleSubmit = () => {
    setAuthLoading(true);
    Keyboard.dismiss();

    handleLogin(username, password)
    .then(() => setErrorMessage(''))
    .catch(() => setErrorMessage('invalid username or password'))
    .finally(() => {
      setAuthLoading(false);
      setUsername('');
      setPassword('');
    })
  }

  return (
    <Container>
      <Image source={require('../../../assets/images/Logo.png')}/>
      <CustomTextInput 
        placeholder="Username" 
        value={username} 
        onChangeValue={(text) => setUsername(text)}
      />

      {errorMessage && (
        <ErrorText>{errorMessage}</ErrorText>
      )}

      <CustomTextInput
        secureTextEntry={true}
        placeholder="Password"
        value={password}
        onChangeValue={(text) => setPassword(text)}
      />
      <SubmitButton
        text="Sign In"
        loading={authLoading}
        onPress={handleSubmit}
      />

      <Text onPress={() => navigation.navigate('signup')}>Register now!</Text>
    </Container>
  )
}

const Text = styled.Text`
  margin-top: 10px;
  color: #000;
  font-weight: 600;
`

const ErrorText = styled.Text`
  margin-top: 5px;
  width: 90%;
  color: #b82424;
`