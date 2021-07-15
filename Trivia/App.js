import React from 'react';
import type { Node } from 'react';
import { SafeAreaView, StyleSheet, Button, Text } from 'react-native';

//import Preguntas from './src/components/PreguntasTest';
import DemoTrivia from './src/components/DemoTrivia';

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
          name="DemoTrivia"
          component={DemoTrivia}
          options={{
            headerStyle: { backgroundColor: 'rgb(74, 74, 74)' },
            headerTintColor: 'white',
          }}
        />
        {/* <Stack.Screen
          name="PreguntasTest"
          component={Preguntas}
          options={{
            headerStyle: { backgroundColor: 'rgb(74, 74, 74)' },
            headerTintColor: 'white',
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Home = ({ navigation }): Node => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.texto}> TRIVIA </Text>
      <Button
        title="Comenzar"
        onPress={() => navigation.navigate('DemoTrivia')}
        color="#00a806"
      />
      {/* <Button
        title="Comenzar (test)"
        onPress={() => navigation.navigate('PreguntasTest')}
        color="#00a806"
      /> */}
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
