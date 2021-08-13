import React from 'react';

import Home from './src/components/views/Home';
import EndScreen from './src/components/views/EndScreen';
import ModeSelect from './src/components/views/ModeSelect';
import LeaderBoard from './src/components/views/LeaderBoard';
import Game from './src/components/views/Game';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="EndScreen"
          component={EndScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ModeSelect"
          component={ModeSelect}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LeaderBoard"
          component={LeaderBoard}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Game"
          component={Game}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
