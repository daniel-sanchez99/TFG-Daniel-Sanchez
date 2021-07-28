import { ToastAndroid } from 'react-native';
import axios from 'axios';

import { actualizaVidas } from './VidasController';
import { actualizaPuntos } from './PuntosController';

export function fetchPregunta(state) {
  return axios
    .get('https://opentdb.com/api.php?amount=1&type=boolean')
    .then(response => {
      actualiza(state, response);
      return state;
    })
    .catch(function (error) {
      console.log(error);
      throw error;
    });
}

export function fetchPreguntaMultiple(state) {
  return axios
    .get('https://opentdb.com/api.php?amount=1&type=multiple')
    .then(response => {
      console.log(response.data.results[0]);
      actualizaMultiple(state, response);
      return state;
    })
    .catch(function (error) {
      console.log(error);
      throw error;
    });
}

export function actualiza(state, response) {
  state.enunciado = formato(response.data.results[0].question);
  state.correcta = response.data.results[0].correct_answer;
  state.incorrecta = response.data.results[0].incorrect_answers[0];
  state.categoria = response.data.results[0].category;
  return state;
}

export function actualizaMultiple(state, response) {
  state.enunciado = formato(response.data.results[0].question);
  state.correcta = formato(response.data.results[0].correct_answer);
  state.incorrecta1 = formato(response.data.results[0].incorrect_answers[0]);
  state.incorrecta2 = formato(response.data.results[0].incorrect_answers[1]);
  state.incorrecta3 = formato(response.data.results[0].incorrect_answers[2]);
  state.categoria = response.data.results[0].category;
  return state;
}

export function formato(texto) {
  return texto.replace(/&quot;/g, '"').replace(/&#039;/g, '´');
}

export function comprueba(seleccion, state, props) {
  if (
    (seleccion && state.correcta === 'True') ||
    (!seleccion && state.correcta === 'False')
  ) {
    ToastAndroid.show('Correcto!', ToastAndroid.SHORT);
    actualizaPuntos(state);
  } else {
    ToastAndroid.show('Incorrecto!', ToastAndroid.SHORT);
    actualizaVidas(state, props);
  }
  return fetchPregunta(state);
}
