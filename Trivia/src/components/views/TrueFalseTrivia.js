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
    puntos: 0,
    vidas: 3,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.containerPuntos}>
            <Text style={styles.textoP}>Vidas: {this.state.vidas}</Text>
          </View>

          <View style={styles.containerPuntos}>
            <Text style={styles.textoP}>Puntuacion: {this.state.puntos}</Text>
          </View>
        </View>

        <View style={styles.containerCategoria}>
          <Text style={styles.textoN}> {this.state.categoria} </Text>
        </View>

        <View style={styles.containerPregunta}>
          <Text style={styles.texto}> {this.state.enunciado} </Text>
        </View>

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
