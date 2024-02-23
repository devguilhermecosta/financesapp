import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 15px;
  margin-top: 30px;
  margin-right: 15px;
  margin-bottom: 15px;
  width: 100%;
  max-height: 60px;
`;

export const Title = styled.Text`
  font-size: 22px;
  margin-left: 8px;
`;

export const ButtonMenu = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;