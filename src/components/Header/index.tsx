import React from 'react';
import { Container, Title, ButtonMenu } from './styles';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';

export default function Header({ title }: { title?: React.ReactNode }): React.JSX.Element {
  const navigation = useNavigation();

  return (
    <Container>
      <ButtonMenu onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <SimpleLineIcons name="menu" size={35} color="#121212"/>
      </ButtonMenu>
      {title && (
        <Title>{title}</Title>
      )}
    </Container>
  )
}