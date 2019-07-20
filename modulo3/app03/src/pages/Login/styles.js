import styled from 'styled-components/native';
import * as Colors from '~/services/colors';

export const Container = styled.View`
  flex: 1;
  background: ${Colors.violetRocket};
  justify-content: center;
  align-items: stretch;
  padding: 30px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: Colors.grey,
})`
  background: ${Colors.white};
  border-radius: 4px;
  padding: 0 20px;
  height: 52px;
  color: ${Colors.darkGrey};
`;

export const Button = styled.TouchableOpacity`
  background: ${Colors.greenRocket};
  border-radius: 4px;
  height: 52px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  color: ${Colors.white};
  font-size: 18px;
  font-weight: bold;
`;

export const Error = styled.Text`
  padding: 10px;
  color: ${Colors.danger};
  text-align: center;
`;
