import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const UserModal = styled.Modal.attrs({
  backdropColor: '#585858cc',
  backdropOpacity: 0.2,
  // transparent: true,
})`
  flex: 1 0;
  justify-content: center;
  align-items: stretch;
`;

export const BoxContainer = styled.View`
  flex: 1 0;
  justify-content: center;
  align-items: stretch;
`;

export const Box = styled.View`
  background-color: ${colors.white};
  border-radius: ${metrics.baseRadius}px;
  margin: ${metrics.baseMargin}px;
  padding: ${metrics.basePadding * 2}px;
`;

export const BoxButton = styled.View`
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  height: 42px;
  flex: 1 0;
  margin-left: ${props => (props.left && metrics.baseMargin / 4) || 0}px;
  margin-right: ${props => (props.right && metrics.baseMargin / 4) || 0}px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.backgroundColor || colors.primary};
  border-radius: ${metrics.baseRadius}px;
`;

export const Label = styled.Text`
  color: ${props => props.color || colors.lighter};
  font-weight: bold;
  font-size: ${metrics.defaultSize}px;
`;

export const Error = styled.Text`
  color: ${colors.white};
  background-color: ${colors.danger};
  padding: ${metrics.basePadding}px;
  text-align: center;
`;

export const BoxInput = styled.TextInput.attrs({
  placeholderTextColor: colors.lighter,
})`
  height: 52px;
  color: ${colors.lighter};
  margin: ${metrics.baseMargin}px 0;
  background-color: ${colors.primary};
  border-radius: ${metrics.baseRadius}px;
`;

export const Title = styled.Text`
  text-align: center;
  font-weight: bold;
  color: ${colors.primary};
  font-size: ${metrics.defaultSize}px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  color: colors.lighter,
  size: 'small',
})``;
