import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import Bands from './Bands';
import Stats from './Stats';
import MetalStyles from './MetalStyles';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#111',
        },
        headerTitleStyle: {
          color: '#f00'
        },
        tabBarStyle: {
          backgroundColor: '#111',
        },
        tabBarInactiveBackgroundColor: '#000',
        tabBarActiveBackgroundColor: '#111',
        tabBarActiveTintColor: '#f00',
        tabBarInactiveTintColor: '#600',
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
      <Tab.Screen
        name="Styles"
        component={MetalStyles}
        options={{
          tabBarLabel: 'Styles',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="music" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
