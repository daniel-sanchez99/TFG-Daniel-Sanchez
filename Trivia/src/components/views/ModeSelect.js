import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity, Text, View } from 'react-native';

import styles from '../styles.js';

//TODO training (no vidas, preguntas hasta cansarte)

const Modes = ({ navigation }) => {
  const [diff, setDiff] = useState('easy');
  const [mode, setMode] = useState('boolean');
  const [timelives, setTimeLives] = useState('lives');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.texto}> Select time or lives </Text>
      <Text style={styles.texto}> {timelives} </Text>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => setTimeLives('time')}
          style={styles.button}>
          <Text style={styles.textoP}>Time</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTimeLives('lives')}
          style={styles.button}>
          <Text style={styles.textoP}>Lives</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.texto}> Select game mode </Text>
      <Text style={styles.texto}> {mode} </Text>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => setMode('boolean')}
          style={styles.button}>
          <Text style={styles.textoP}>True / False</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setMode('multiple')}
          style={styles.button}>
          <Text style={styles.textoP}>Multiple choice</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.texto}> Select difficulty </Text>
      <Text style={styles.texto}> {diff} </Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => setDiff('easy')} style={styles.button}>
          <Text style={styles.textoP}>Easy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setDiff('medium')}
          style={styles.button}>
          <Text style={styles.textoP}>Medium</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setDiff('hard')} style={styles.button}>
          <Text style={styles.textoP}>Hard</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Game', { timelives, mode, diff })}
        style={styles.button}>
        <Text style={styles.texto}>GO!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Modes;
