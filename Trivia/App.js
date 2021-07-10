import React from 'react';
import type { Node } from 'react';
import { SafeAreaView, StyleSheet, Button, Text } from 'react-native';

import Clicker from './src/components/Clicker';
import Preguntas from './src/components/PreguntasTest';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MyStack = (): Node => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: { backgroundColor: 'rgb(74, 74, 74)' },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Clicker"
          component={Clicker}
          options={{
            headerStyle: { backgroundColor: 'rgb(74, 74, 74)' },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="PreguntasTest"
          component={Preguntas}
          options={{
            headerStyle: { backgroundColor: 'rgb(74, 74, 74)' },
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Home = ({ navigation }): Node => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.texto}> TRIVIA </Text>
      <Button
        title="Ir a clicker"
        onPress={() => navigation.navigate('Clicker')}
      />
      <Button
        title="Comenzar"
        onPress={() => navigation.navigate('PreguntasTest')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'rgb(46, 46, 46)',
  },
  texto: {
    fontWeight: 'bold',
    marginTop: 30,
    color: 'white',
    fontSize: 40,
  },
});

export default MyStack;
