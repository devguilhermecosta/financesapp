import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

interface SubmitProps {
  text: string;
  loading: boolean;
  onPress?: () => void;
}

export default function SubmitButton(props: SubmitProps): React.JSX.Element {
  return (
    <Touchable 
      activeOpacity={0.7} 
      onPress={props.onPress}
    >
      {
        props.loading
        ? <ActivityIndicator size="large" color="#fff"/>
        : <Text>{props.text}</Text>
      }
    </Touchable>
  );
}

const Touchable = styled.TouchableOpacity`
  width: 90%;
  height: 60px;
  background-color: #235daa;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
`

const Text = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 18px;
`
