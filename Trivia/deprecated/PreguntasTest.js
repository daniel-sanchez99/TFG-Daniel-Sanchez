import React, { Component } from 'react';
import axios from 'axios';

import { StyleSheet, View, Text, Button, ToastAndroid } from 'react-native';
//TODO mirar una forma de usar state para ir pidiendo y actualizando, ademas de como organizar perser + componentes
export default class Preguntas extends Component {
  state = {
    enunciado: 'AAA',
    correcta: '',
    incorrecta: '',
    categoria: '',
    dificultad: '',
    tipo: '',
  };

  onPress = () => {
    axios
      .get('https://opentdb.com/api.php?amount=1&type=boolean')
      .then(response => {
        this.setState({
          enunciado: response.data.results[0].question,
        });
        console.log(this.state.enunciado);
        ToastAndroid.show('Preguntas recibidas con exito', ToastAndroid.SHORT);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Clicka para parsear preguntas</Text>
        <Button onPress={this.onPress} title="Obtener preguntas" />
        <Text style={styles.texto}> {this.state.enunciado} </Text>
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
    fontSize: 20,
  },
});
