import React from 'react';
import { SafeAreaView, TouchableOpacity, Text, Image } from 'react-native';

import styles from '../styles.js';

const logo = {
  uri: 'https://images-na.ssl-images-amazon.com/images/I/61K1EvI-pLL.png',
  width: 128,
  height: 128,
};

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} />
      <Text style={styles.titulo}> TRIVIA </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('ModeSelect')}
        style={styles.button}>
        <Text style={styles.texto}>Begin</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('LeaderBoard')}
        style={styles.button}>
        <Text style={styles.texto}>LeaderBoard</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
