import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity, Text, View } from 'react-native';

import styles from '../styles.js';

const Modes = ({ navigation }) => {
  const [diff, setDiff] = useState('easy');
  const [mode, setMode] = useState('boolean');
  const [timelives, setTimeLives] = useState('lives');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}> Game Settings </Text>
      <Text style={styles.textoModeSelect}> Select mode: </Text>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => setTimeLives('lives')}
          style={[styles.option, timelives === 'lives' && styles.selected]}>
          <Text>Lives</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTimeLives('time')}
          style={[styles.option, timelives === 'time' && styles.selected]}>
          <Text>Time</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.textoModeSelect}> Select question type: </Text>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => setMode('boolean')}
          style={[styles.option, mode === 'boolean' && styles.selected]}>
          <Text>True / False</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setMode('multiple')}
          style={[styles.option, mode === 'multiple' && styles.selected]}>
          <Text>Multiple choice</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.textoModeSelect}> Select difficulty </Text>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => setDiff('easy')}
          style={[styles.option, diff === 'easy' && styles.selected]}>
          <Text>Easy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setDiff('medium')}
          style={[styles.option, diff === 'medium' && styles.selected]}>
          <Text>Medium</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setDiff('hard')}
          style={[styles.option, diff === 'hard' && styles.selected]}>
          <Text>Hard</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Game', { timelives, mode, diff })}
        style={styles.buttonGo}>
        <Text style={styles.textoGo}>GO!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Modes;
