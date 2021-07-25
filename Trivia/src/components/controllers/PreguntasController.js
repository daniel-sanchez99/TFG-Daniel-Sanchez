import { ToastAndroid } from 'react-native';
import axios from 'axios';

export function comprueba(seleccion, state, props) {
  if (
    (seleccion && state.correcta === 'True') ||
    (!seleccion && state.correcta === 'False')
  ) {
    ToastAndroid.show('Correcto!', ToastAndroid.SHORT);
    return fetchPregunta(state)
      .then(response => {
        return response;
      })
      .catch(function (error) {
        console.log(error);
        throw error;
      });
  } else {
    ToastAndroid.show('Incorrecto!', ToastAndroid.SHORT);
    props.navigation.goBack();
    return Promise.resolve();
  }
}

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
  state.enunciado = response.data.results[0].question;
  state.correcta = response.data.results[0].correct_answer;
  state.incorrecta = response.data.results[0].incorrect_answers[0];
  state.categoria = response.data.results[0].category;
  return state;
}
