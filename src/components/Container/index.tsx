import React from 'react';
import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

export default function Container({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <View behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <StatusBar 
        animated={true} 
        backgroundColor='#daf1f1' 
        barStyle='dark-content'
        showHideTransition='fade'
      />
      {children}
    </View>
  );
}

const View = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #daf1f1;
`
