import React from 'react';
import { SafeAreaView, TouchableOpacity, Text, View } from 'react-native';

import styles from '../styles.js';

const End = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerPregunta}>
        <Text style={styles.texto}> Final Score: {route.params.puntos} </Text>
      </View>
      {/* Comprobar record y felicitar y toda la pesca*/}
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.button}>
        <Text style={styles.texto}>Back to Menu</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default End;
