import { ToastAndroid } from 'react-native';
import axios from 'axios';

import { actualizaVidas } from './VidasController';
import { actualizaPuntos } from './PuntosController';

export function fetchPregunta(state) {
  return axios
    .get(
      'https://opentdb.com/api.php?amount=1&difficulty=' +
        state.dificultad +
        '&type=' +
        state.modo,
    )
    .then(response => {
      return updateState(response, state);
    })
    .catch(function (error) {
      console.log(error);
      throw error;
    });
}

export function generaEstadoIni(timelives, mode, diff) {
  //NO SE PUEDE HACER ESTO PORQUE SE GENERA CADA VEZ QUE SE PILLA PREGUNTA
  const state = {
    enunciado: '',
    correcta: '',
    incorrecta: '',
    opcion1: '',
    opcion2: '',
    opcion3: '',
    opcion4: '',
    categoria: '',
    timeOrLives: timelives,
    modo: mode,
    dificultad: diff,
    puntos: 0,
    vidas: 0,
    racha: 0,
  };

  switch (diff) {
    case 'easy':
      state.vidas = 10;
      break;
    case 'medium':
      state.vidas = 5;
      break;
    case 'hard':
      state.vidas = 2;
      break;
  }
  return fetchPregunta(state);
}

export function updateState(response, state) {
  switch (state.modo) {
    case 'boolean':
      state.enunciado = formato(response.data.results[0].question);
      state.correcta = response.data.results[0].correct_answer;
      state.incorrecta = response.data.results[0].incorrect_answers[0];
      state.categoria = response.data.results[0].category;
      break;
    case 'multiple':
      let respuestas = shuffle([
        formato(response.data.results[0].correct_answer),
        formato(response.data.results[0].incorrect_answers[0]),
        formato(response.data.results[0].incorrect_answers[1]),
        formato(response.data.results[0].incorrect_answers[2]),
      ]);

      state.correcta = response.data.results[0].correct_answer;
      state.opcion1 = respuestas[0];
      state.opcion2 = respuestas[1];
      state.opcion3 = respuestas[2];
      state.opcion4 = respuestas[3];
      state.enunciado = formato(response.data.results[0].question);
      state.categoria = response.data.results[0].category;
      break;
  }
  return state;
}

export function comprueba(seleccion, state, props) {
  switch (state.modo) {
    case 'boolean':
      if (
        (seleccion && state.correcta === 'True') ||
        (!seleccion && state.correcta === 'False')
      ) {
        ToastAndroid.show('Correct!', ToastAndroid.SHORT);
        actualizaPuntos(state);
      } else {
        ToastAndroid.show('Incorrect!', ToastAndroid.SHORT);
        actualizaVidas(state, props);
      }
      break;
    case 'multiple':
      if (seleccion === state.correcta) {
        ToastAndroid.show('Correct!', ToastAndroid.SHORT);
        actualizaPuntos(state);
      } else {
        ToastAndroid.show('Incorrect!', ToastAndroid.SHORT);
        actualizaVidas(state, props);
      }
      break;
  }
  return fetchPregunta(state);
}

export function formato(texto) {
  return texto
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#038;/g, '&');
}

function shuffle(array) {
  var i = array.length,
    j = 0,
    temp;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}
