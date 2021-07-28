import React, { Component } from 'react';

import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

import styles from '../styles.js';

import {
  comprueba,
  fetchPreguntaMultiple,
} from '../controllers/PreguntasController';

export default class PreguntasMul extends Component {
  constructor(props) {
    super(props);
    fetchPreguntaMultiple(this.state).then(response => {
      this.setState(response);
    });
  }

  state = {
    enunciado: '',
    correcta: '',
    incorrecta1: '',
    incorrecta2: '',
    incorrecta3: '',
    categoria: '',
    dificultad: '',
    tipo: '',
    puntos: 0,
    vidas: 3,
    racha: 0,
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.row}>
          <View style={styles.containerPuntos}>
            <Text style={styles.textoP}>Lives: {this.state.vidas}</Text>
          </View>

          <View style={styles.containerPuntos}>
            <Text style={styles.textoP}>Score: {this.state.puntos}</Text>
          </View>
        </View>

        <View style={styles.containerCategoria}>
          <Text style={styles.textoN}> {this.state.categoria} </Text>
        </View>

        <View style={styles.containerPregunta}>
          <Text style={styles.texto}> {this.state.enunciado} </Text>
        </View>

        {/*TODO PENSAR COMO DISTRIBUIR LAS CORRECTAS Y COMO COMPROBAR */}

        <View style={styles.containerRespuestas}>
          <TouchableOpacity
            style={styles.buttonOption}
            onPress={() =>
              comprueba(true, this.state, this.props).then(response => {
                this.setState(response);
              })
            }>
            <Text style={styles.textoN}>{this.state.correcta}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonOption}
            onPress={() =>
              comprueba(false, this.state, this.props).then(response => {
                this.setState(response);
              })
            }>
            <Text style={styles.textoN}>{this.state.incorrecta1}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonOption}
            onPress={() =>
              comprueba(true, this.state, this.props).then(response => {
                this.setState(response);
              })
            }>
            <Text style={styles.textoN}>{this.state.incorrecta2}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonOption}
            onPress={() =>
              comprueba(false, this.state, this.props).then(response => {
                this.setState(response);
              })
            }>
            <Text style={styles.textoN}>{this.state.incorrecta3}</Text>
          </TouchableOpacity>
        </View>
        {/* <Text style={styles.textoP}> Correcta: {this.state.correcta} </Text> */}
      </SafeAreaView>
    );
  }
}
