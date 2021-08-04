import { ToastAndroid } from 'react-native';
import axios from 'axios';

import { actualizaVidas } from './VidasController';
import { actualizaPuntos } from './PuntosController';

// CUANDO AVANCE, JUNTARE TODO Y HARE QUE DEPENDIENDO DEL
// ESTADO SE GENERE UNA URL U OTRA Y CAMBIE LA LOGICA

// PARTE DE PREGUNTAS DE VERDADERO / FALSO

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

export function actualiza(state, response) {
  state.enunciado = formato(response.data.results[0].question);
  state.correcta = response.data.results[0].correct_answer;
  state.incorrecta = response.data.results[0].incorrect_answers[0];
  state.categoria = response.data.results[0].category;
  return state;
}

export function comprueba(seleccion, state, props) {
  if (
    (seleccion && state.correcta === 'True') ||
    (!seleccion && state.correcta === 'False')
  ) {
    //ToastAndroid.show('Correct!', ToastAndroid.SHORT);
    actualizaPuntos(state);
  } else {
    //ToastAndroid.show('Incorrect!', ToastAndroid.SHORT);
    actualizaVidas(state, props);
  }
  return fetchPregunta(state);
}

// PARTE DE PREGUNTAS DE MULTIPLE RESPUESTA

export function fetchPreguntaMultiple(state) {
  return axios
    .get('https://opentdb.com/api.php?amount=1&type=multiple')
    .then(response => {
      actualizaMultiple(state, response);
      return state;
    })
    .catch(function (error) {
      console.log(error);
      throw error;
    });
}

export function actualizaMultiple(state, response) {
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
  return state;
}

export function compruebaMultiple(seleccion, state, props) {
  if (seleccion === state.correcta) {
    ToastAndroid.show('Correcto!', ToastAndroid.SHORT);
    actualizaPuntos(state);
  } else {
    ToastAndroid.show('Incorrecto!', ToastAndroid.SHORT);
    actualizaVidas(state, props);
  }
  return fetchPreguntaMultiple(state);
}

export function formato(texto) {
  return texto.replace(/&quot;/g, '"').replace(/&#039;/g, '´');
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
