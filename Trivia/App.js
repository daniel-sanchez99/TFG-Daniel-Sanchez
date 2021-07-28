import React from 'react';

import TrueFalseTrivia from './src/components/views/TrueFalseTrivia';
import Home from './src/components/views/Home';
import EndScreen from './src/components/views/EndScreen';

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
          name="TrueFalseTrivia"
          component={TrueFalseTrivia}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
