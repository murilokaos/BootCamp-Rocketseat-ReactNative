import styled from 'styled-components/native';
import * as Colors from '~/services/colors';

export const Container = styled.SafeAreaView`
  flex: 1 0 0;
  justify-content: center;
  align-items: stretch;
  background: ${Colors.violetRocket};
  padding: 1px 30px;
`;

export const List = styled.ScrollView`
  padding: 10px 0;
`;

export const Card = styled.View`
  background-color: ${Colors.white};
  justify-content: flex-start;
  align-items: stretch;
  flex-direction: row;
  border-radius: 4px;
  padding: 10px;
  margin: 10px 0;
`;

export const CardDescription = styled.View`
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  flex: 1;
  padding: 0 10px;
`;

export const TextLabel = styled.Text`
  color: ${Colors.grey};
  font-size: 18px;
  font-weight: bold;
`;

export const TextDescription = styled.Text`
  color: ${Colors.grey};
  font-size: 14px;
  text-align: left;
`;

export const Image = styled.Image`
  width: 55px;
  height: 55px;
  border-width: 4px;
  border-radius: 4px;
  border-color: ${Colors.greenRocket};
`;

export const Error = styled.Text`
  padding: 10px;
  color: ${Colors.danger};
  text-align: center;
`;
