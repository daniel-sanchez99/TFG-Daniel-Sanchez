import React from 'react';
import { SafeAreaView, TouchableOpacity, Text } from 'react-native';

import styles from '../styles.js';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}> TRIVIA </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('TrueFalseTrivia')}
        style={styles.button}>
        <Text style={styles.texto}>Comenzar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
