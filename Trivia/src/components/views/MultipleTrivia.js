import React, { Component } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  BackHandler,
} from 'react-native';

import styles from '../styles.js';

import {
  compruebaMultiple,
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
    opcion1: '',
    opcion2: '',
    opcion3: '',
    opcion4: '',
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

        <View style={styles.containerRespuestas}>
          <TouchableOpacity
            style={styles.buttonOption}
            onPress={() =>
              compruebaMultiple(
                this.state.opcion1,
                this.state,
                this.props,
              ).then(response => {
                this.setState(response);
              })
            }>
            <Text style={styles.textoN}>{this.state.opcion1}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonOption}
            onPress={() =>
              compruebaMultiple(
                this.state.opcion2,
                this.state,
                this.props,
              ).then(response => {
                this.setState(response);
              })
            }>
            <Text style={styles.textoN}>{this.state.opcion2}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonOption}
            onPress={() =>
              compruebaMultiple(
                this.state.opcion3,
                this.state,
                this.props,
              ).then(response => {
                this.setState(response);
              })
            }>
            <Text style={styles.textoN}>{this.state.opcion3}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonOption}
            onPress={() =>
              compruebaMultiple(
                this.state.opcion4,
                this.state,
                this.props,
              ).then(response => {
                this.setState(response);
              })
            }>
            <Text style={styles.textoN}>{this.state.opcion4}</Text>
          </TouchableOpacity>
        </View>
        {/* <Text style={styles.textoP}> Correcta: {this.state.correcta} </Text> */}
      </SafeAreaView>
    );
  }
}
