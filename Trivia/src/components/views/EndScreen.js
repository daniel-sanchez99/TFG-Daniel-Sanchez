import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  BackHandler,
} from 'react-native';

import styles from '../styles.js';
import { subePuntuacion } from '../controllers/PuntosController';

const End = ({ navigation, route }) => {
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const backAction = () => {
      navigation.navigate('Home');
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerPregunta}>
        <Text style={styles.texto}> Final Score: {route.params.puntos} </Text>
      </View>

      <View style={styles.containerLight}>
        <TextInput
          style={styles.textIn}
          placeholder="Enter your name"
          placeholderTextColor="gray"
          // eslint-disable-next-line no-shadow
          onChangeText={text => setText(text)}
          defaultValue={text}
        />
        <TouchableOpacity
          onPress={() => {
            subePuntuacion(route.params.puntos, text);
            setSubmitted(true);
          }}
          disabled={submitted}
          style={!submitted ? styles.button : styles.buttonSubmitted}>
          <Text style={styles.textoN}>
            {!submitted ? 'Submit' : 'Submitted'}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.button}>
        <Text style={styles.textoN}>Back to Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default End;
