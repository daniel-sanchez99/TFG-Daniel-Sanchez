import React, { Component } from 'react';
import { CountDown } from 'react-native-countdown-component';

import {
  View,
  Text,
  SafeAreaView,
  Alert,
  BackHandler,
  TouchableOpacity,
} from 'react-native';

import styles from '../styles.js';

import { comprueba, generaEstadoIni } from '../controllers/PreguntasController';

export default class PreguntasMul extends Component {
  constructor(props) {
    super(props);
    generaEstadoIni(
      props.route.params.timelives,
      props.route.params.mode,
      props.route.params.diff,
    ).then(response => {
      this.setState(response);
    });
  }

  state = {};

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

  renderRespuestas() {
    switch (this.props.route.params.mode) {
      case 'boolean':
        return (
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
        );
      case 'multiple':
        return (
          <View style={styles.containerRespuestas}>
            <TouchableOpacity
              style={styles.buttonOption}
              onPress={() =>
                comprueba(this.state.opcion1, this.state, this.props).then(
                  response => {
                    this.setState(response);
                  },
                )
              }>
              <Text style={styles.textoN}>{this.state.opcion1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonOption}
              onPress={() =>
                comprueba(this.state.opcion2, this.state, this.props).then(
                  response => {
                    this.setState(response);
                  },
                )
              }>
              <Text style={styles.textoN}>{this.state.opcion2}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonOption}
              onPress={() =>
                comprueba(this.state.opcion3, this.state, this.props).then(
                  response => {
                    this.setState(response);
                  },
                )
              }>
              <Text style={styles.textoN}>{this.state.opcion3}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonOption}
              onPress={() =>
                comprueba(this.state.opcion4, this.state, this.props).then(
                  response => {
                    this.setState(response);
                  },
                )
              }>
              <Text style={styles.textoN}>{this.state.opcion4}</Text>
            </TouchableOpacity>
          </View>
        );
    }
  }

  timeOrLives() {
    if (this.state.timeOrLives === 'time') {
      return (
        <View style={styles.containerPuntos}>
          <CountDown
            until={300}
            onFinish={() =>
              this.props.navigation.navigate('EndScreen', {
                puntos: this.state.puntos,
              })
            }
            size={15}
            timeToShow={['M', 'S']}
            timeLabels={{ m: null, s: null }}
            digitStyle={{}}
            digitTxtStyle={{ color: 'white' }}
            separatorStyle={{ color: 'white' }}
            showSeparator
          />
        </View>
      );
    } else if (this.state.timeOrLives === 'lives') {
      return (
        <View style={styles.containerPuntos}>
          <Text style={styles.textoP}>Lives: {this.state.vidas}</Text>
        </View>
      );
    }
  }

  render() {
    let respuestas = this.renderRespuestas();
    let timeLives = this.timeOrLives();
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.row}>
          {timeLives}
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
        {respuestas}
      </SafeAreaView>
    );
  }
}
