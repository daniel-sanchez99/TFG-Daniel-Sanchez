import React, { Component } from 'react';

import { View, Text, TouchableOpacity, Alert, BackHandler } from 'react-native';

import styles from '../styles.js';

import { comprueba, fetchPregunta } from '../controllers/PreguntasController';

export default class PreguntasTF extends Component {
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
    puntos: 0,
    vidas: 3,
    racha: 0,
  };

  backAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to go back?', [
      {
        text: 'Cancel',
        onPress: () => null,
      },
      { text: 'YES', onPress: () => this.props.navigation.navigate('Home') },
    ]);
    return true;
  };

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.backAction,
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  render() {
    return (
      <View style={styles.container}>
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
        {/* <Text style={styles.textoP}> Correcta: {this.state.correcta} </Text> */}
      </View>
    );
  }
}
