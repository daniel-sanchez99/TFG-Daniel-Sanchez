import React, { Component } from 'react';
import axios from 'axios';

import { StyleSheet, View, Text, Button, ToastAndroid } from 'react-native';

export default class Preguntas extends Component {
  constructor(props) {
    super(props);
    this.getPregunta();
  }

  state = {
    enunciado: '',
    correcta: '',
    incorrecta: '',
    categoria: '',
    dificultad: '',
    tipo: '',
  };

  getPregunta = () => {
    axios
      .get('https://opentdb.com/api.php?amount=1&type=boolean')
      .then(response => {
        this.setState({
          enunciado: response.data.results[0].question,
          correcta: response.data.results[0].correct_answer,
          incorrecta: response.data.results[0].incorrect_answers[0],
          categoria: response.data.results[0].category,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  comprueba = valor => {
    if (valor && this.state.correcta === 'True') {
      console.log('Acertaste wey');
      this.getPregunta();
      ToastAndroid.show('Correcto!', ToastAndroid.SHORT);
    } else if (!valor && this.state.correcta === 'False') {
      console.log('Acertaste wey');
      this.getPregunta();
      ToastAndroid.show('Correcto!', ToastAndroid.SHORT);
    } else {
      console.log('Nooo wey donde te sentaste');
      ToastAndroid.show('Incorrecto!', ToastAndroid.SHORT);
      this.props.navigation.goBack();
    }
  };

  render() {
    //TODO me detecta por alguna razon que siempre le doy al ultimo boton declarado, sospecho que por el onpress
    return (
      <View style={styles.container}>
        <Text style={styles.texto}> {this.state.categoria} </Text>
        <Text style={styles.texto}> {this.state.enunciado} </Text>
        <Text style={styles.texto}> {this.state.dificultad} </Text>
        <Text style={styles.texto}> Correcta: {this.state.correcta} </Text>
        <Button onPress={() => this.comprueba(true)} title="True" />
        <Button onPress={() => this.comprueba(false)} title="False" />
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
