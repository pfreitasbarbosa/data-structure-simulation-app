import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

console.disableYellowBox = true;

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar backgroundColor="#07080B" barStyle="light-content" />
    <Routes />
  </NavigationContainer>
);

export default App;
