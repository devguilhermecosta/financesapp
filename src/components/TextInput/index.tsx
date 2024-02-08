import React from "react";
import styled from "styled-components/native";
import { InputModeOptions } from "react-native";


interface TextInputProps {
  inputMode?: InputModeOptions;
  placeholder?: string;
  value: string;
  secureTextEntry?: boolean;
  onChangeValue: (text: string) => void;
}

const TextInput = styled.TextInput`
  width: 90%;
  padding: 10px;
  margin-top: 15px;
  background-color: #fff;
  color: #000;
  border-radius: 8px;
`

export default function CustomTextInput(props: TextInputProps): React.JSX.Element {
  return (
    <TextInput
      inputMode={props.inputMode ? props.inputMode : 'text'}
      secureTextEntry={props.secureTextEntry ? props.secureTextEntry : false}
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={(text) => props.onChangeValue(text)}
    />
  )
}