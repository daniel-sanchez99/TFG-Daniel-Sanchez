import React, { Component } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import styles from '../styles.js';

import { comprueba, fetchPregunta } from '../controllers/PreguntasController';

export default class Preguntas extends Component {
  constructor(props) {
    super(props);
    fetchPregunta(this.state).then(response => {
      this.setState(response);
    });
  }

  state = {
    enunciado: '',
    correcta: '',
    incorrecta: '',
    categoria: '',
    dificultad: '',
    tipo: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}> {this.state.categoria} </Text>
        <Text style={styles.texto}> {this.state.enunciado} </Text>
        <Text style={styles.texto}> {this.state.dificultad} </Text>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.buttonOption}
            onPress={() =>
              comprueba(true, this.state, this.props).then(response => {
                this.setState(response);
              })
            }>
            <Text style={styles.textoN}>True</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonOption}
            onPress={() =>
              comprueba(false, this.state, this.props).then(response => {
                this.setState(response);
              })
            }>
            <Text style={styles.textoN}>False</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.textoP}> Correcta: {this.state.correcta} </Text>
      </View>
    );
  }
}
