import React from 'react';
import { SafeAreaView, TouchableOpacity, Text, View } from 'react-native';

import styles from '../styles.js';

const Modes = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.texto}> Selecciona </Text>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => navigation.navigate('TrueFalseTrivia')}
          style={styles.button}>
          <Text style={styles.textoP}>True / False</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('MultipleTrivia')}
          style={styles.button}>
          <Text style={styles.textoP}>Multiple choice</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Modes;
