import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

export const Label = styled.Text`
  font-size: ${metrics.defaultSize - 4}px;
  text-align: center;
  color: ${colors.darkTransparent};
  margin: ${metrics.baseMargin / 2}px;
`;

export const Title = styled.Text`
  font-size: ${metrics.defaultSize}px;
  text-align: center;
  color: ${props => (props.color ? props.color : colors.primary)};
`;

export const Container = styled.View({
  ...StyleSheet.absoluteFillObject,
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
});

export const ImageMarker = styled.Image`
  border-radius: 30px;
  width: 60px;
  height: 60px;
  border-color: ${colors.primary};
  border-width: 3px;
`;

export const CustomCallout = styled.View`
  flex: 1 1;
  width: 280;
  height: 140;
  padding: ${metrics.basePadding * 2}px;
  background-color: ${colors.white};
  border-radius: ${metrics.baseRadius * 1.5}px;
  margin-bottom: ${metrics.baseMargin / 4}px;
`;
