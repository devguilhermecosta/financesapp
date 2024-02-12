import React, { useState } from "react";
import Container from "../../components/Container";
import CustomTextInput from "../../components/TextInput";
import SubmitButton from "../../components/SubmitButton";
import styled from "styled-components/native";
import { Keyboard, ActivityIndicator } from 'react-native';
import { api } from "../../api";

export default function SignUpPage({ navigation }: { navigation: any }): React.JSX.Element {
  const [fNameValue, setFNameValue] = useState('');
  const [lNameValue, setLNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const [errorFName, setErrorFName] = useState('');
  const [errorLName, setErrorLName] = useState('');
  const [errorFEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const [registered, setRegistered] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleRegister(): Promise<void> {
      setLoading(true);

      const config = {
        headers: {
          'Content-Type': 'application/json',
        }
      };

      await api.post('/api/user/register/', {
        first_name: fNameValue,
        last_name: lNameValue,
        email: emailValue,
        password: passwordValue
      }, config)
      .then(() => {
        setRegistered(true);
        setErrorFName('');
        setErrorLName('');
        setErrorEmail('');
        setErrorPassword('');
      })
      .catch(e => {
        const dataError = e.response.data;

        dataError['first_name'] ? setErrorFName(dataError['first_name']) : setErrorFName('');
        dataError['last_name'] ? setErrorLName(dataError['last_name']) : setErrorLName('');
        dataError['email'] ? setErrorEmail(dataError['email']) : setErrorEmail('');
        dataError['password'] ? setErrorPassword(dataError['password']) : setErrorPassword('');
      })
      .finally(() => {
        Keyboard.dismiss();
        setLoading(false);
      });
  }

  if (registered) {
    setTimeout(() => {
      return navigation.goBack();
    }, 5000);
  }

  return (
    <Container>
      {registered && (
        <Message>
          Registered successfully.
          You are redirect to login page.
        </Message>
      )}

      {loading && (
        <ActivityIndicator size="large" color="#2989a7"/>
      )}

      <CustomTextInput 
        placeholder="First Name"
        value={fNameValue}
        onChangeValue={(text) => setFNameValue(text)}
      />
      {errorFName && <TextError>{errorFName}</TextError>}

      <CustomTextInput 
        placeholder="Last Name"
        value={lNameValue}
        onChangeValue={(text) => setLNameValue(text)}
      />
      {errorLName && <TextError>{errorLName}</TextError>}

      <CustomTextInput
        inputMode="email"
        placeholder="E-mail"
        value={emailValue}
        onChangeValue={(text) => setEmailValue(text)}
      />
      {errorFEmail && <TextError>{errorFEmail}</TextError>}

      <CustomTextInput
        secureTextEntry={true}
        placeholder="Password"
        value={passwordValue}
        onChangeValue={(text) => setPasswordValue(text)}
      />
      {errorPassword && <TextError>{errorPassword}</TextError>}

      <SubmitButton
        text="Register"
        onPress={handleRegister}
      />
    </Container>
  )
}

const TextError = styled.Text`
  color: #c94646;
  font-size: 12px;
  text-align: left;
  width: 90%;
`

const Message = styled.Text`
  max-width: 90%;
  text-align: center;
  background-color: #5aaf5a;
  color: #fff;
  padding: 8px;
  border-radius: 8px;
`