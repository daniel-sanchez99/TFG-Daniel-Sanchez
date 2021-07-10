import React from 'react';
import axios from 'axios';

import { StyleSheet, View, Text, Button } from 'react-native';
//TODO mirar una forma de usar state para ir pidiendo y actualizando, ademas de como organizar perser + componentes
export default class Preguntas extends React.Component {
  getPreguntas = () => {
    axios
      .get('https://opentdb.com/api.php?amount=10')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Clicka para parsear preguntas</Text>
        <Button onPress={this.getPreguntas} title="Obtener preguntas" />
      </View>
    );
  }
}

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
