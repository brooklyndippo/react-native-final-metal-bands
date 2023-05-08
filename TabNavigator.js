import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import Bands from './Bands';
import Stats from './Stats';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Bands"
        component={Bands}
        options={{
          tabBarLabel: 'Bands',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="hand-rock-o" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Stats"
        component={Stats}
        options={{
          tabBarLabel: 'Stats',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bar-chart-o" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
