import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #07080b;
  padding: 15px 15px 0;
`;

export const StructureTitle = styled.Text`
  color: #dcdcdf;
  font-weight: bold;
  font-size: 36px;
`;

export const StructureFullTitle = styled.Text`
  color: #dcdcdf;
  font-size: 16px;
`;

export const Input = styled.TextInput`
  height: 40px;
  font-size: 16px;
  color: #333;
  background-color: #dcdcdf;
  margin-top: 16px;
  margin: 16px 0 8px;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 8px;
  background-color: ${darken(0.15, '#3F4E5C')};
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const MainText = styled.Text`
  color: #dcdcdf;
  font-weight: bold;
  font-size: 24px;
`;

export const NodeHeaderText = styled.Text`
  color: #dcdcdf;
`;

export const QueueItem = styled.View`
  background-color: ${darken(0.15, '#3F4E5C')};
  height: 200px;
  align-items: center;
  justify-content: center;
`;
