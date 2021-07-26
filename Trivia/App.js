import React from 'react';

import TrueFalseTrivia from './src/components/views/TrueFalseTrivia';
import Home from './src/components/views/Home';

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
            //headerStyle: { backgroundColor: 'rgb(74, 74, 74)' },
            //headerTintColor: 'white',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TrueFalseTrivia"
          component={TrueFalseTrivia}
          options={{
            //headerStyle: { backgroundColor: 'rgb(74, 74, 74)' },
            //headerTintColor: 'white',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
