import React from 'react';
import styled from 'styled-components/native';

interface SubmitProps {
  text: string;
  onPress?: () => void;
}

export default function SubmitButton(props: SubmitProps): React.JSX.Element {
  return (
    <Touchable 
      activeOpacity={0.7} 
      onPress={props.onPress}
    >
      <Text>{props.text}</Text>
    </Touchable>
  );
}

const Touchable = styled.TouchableOpacity`
  width: 90%;
  background-color: #235daa;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
`

const Text = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 18px;
`
