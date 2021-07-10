import React from 'react';
import type { Node } from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const Clicker = ({ navigation }): Node => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>You clicked {count} times</Text>
      <Button onPress={() => setCount(count + 1)} title="Click me!" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(46, 46, 46)',
  },
  texto: {
    color: 'white',
  },
});

export default Clicker;
