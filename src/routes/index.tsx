import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import DoublyLinked from '../pages/DoublyLinked';
import Queue from '../pages/Queue';

const Tab = createBottomTabNavigator();

const Routes: React.FC = () => (
  <Tab.Navigator
    initialRouteName="LDDE"
    tabBarOptions={{
      keyboardHidesTabBar: true,
      activeTintColor: '#0996F2',
      inactiveTintColor: '#DCDCDF',
      style: { borderTopWidth: 0 },
      tabStyle: {
        backgroundColor: '#07080B',
      },
    }}
  >
    <Tab.Screen
      name="LDDE"
      component={DoublyLinked}
      options={{
        tabBarLabel: 'LDDE',
        tabBarIcon: ({ color, size }) => (
          <Icon name="swap-vert" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Queue"
      component={Queue}
      options={{
        tabBarLabel: 'FILA',
        tabBarIcon: ({ color, size }) => (
          <Icon name="repeat" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default Routes;
