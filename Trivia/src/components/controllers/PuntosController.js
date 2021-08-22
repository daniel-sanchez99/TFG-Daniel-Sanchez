import axios from 'axios';

import { ToastAndroid } from 'react-native';

export function actualizaPuntos(state) {
  state.racha += 1;
  if (state.racha >= 5 && state.racha % 5 === 0) {
    state.vidas++;
  }
  switch (state.timeOrLives) {
    case 'time':
      state.puntos = state.puntos + state.racha * 10;
      break;
    case 'lives':
      switch (state.dificultad) {
        case 'easy':
          state.puntos = state.puntos + 10;
          break;
        case 'medium':
          state.puntos = state.puntos + 20;
          break;
        case 'hard':
          state.puntos = state.puntos + 30;
          break;
      }
      break;
  }
}

export async function subePuntuacion(puntos, nombre) {
  var nombreSinEspacio = nombre.replace(/ /g, '').replace(':', '');

  await getScoreUser(nombreSinEspacio).then(response => {
    if (response === '' || puntos > response) {
      ToastAndroid.show('New Record!', ToastAndroid.SHORT);
    }
  });

  axios
    .get(
      'http://dreamlo.com/lb/U_cKsyLTjEewwBMO3J_R2AmlU7jVyHUEmt1UPHV2y-8g/add/' +
        nombreSinEspacio +
        '/' +
        puntos,
    )
    .catch(function (error) {
      console.log(error);
      throw error;
    });
}

//coge puntuacion de user
export function getScoreUser(nombre) {
  return axios
    .get('http://dreamlo.com/lb/610571cd8f40bb8ea051de90/pipe-get/' + nombre)
    .then(response => {
      return parsePipe(response.data);
    })
    .catch(function (error) {
      console.log(error);
      throw error;
    });
}

export function parsePipe(string) {
  var sinNombre = string.substring(string.indexOf('|') + 1);
  return sinNombre.substring(0, sinNombre.indexOf('|'));
}

export function getUserData() {
  return axios
    .get('http://dreamlo.com/lb/610571cd8f40bb8ea051de90/json')
    .then(response => {
      let respuesta = [];
      type Elem = { name: string, score: number, index: number };
      let elem: Elem = {};
      let indice = 1;

      if (response.data.dreamlo.leaderboard === null) {
        elem = { name: 'Empty', score: 'Empty', index: 0 };
        respuesta.push(elem);
      } else if (
        Object.keys(response.data.dreamlo.leaderboard.entry).length === 1
      ) {
        elem = {
          name: response.data.dreamlo.leaderboard.entry.name,
          score: response.data.dreamlo.leaderboard.entry.score,
          index: 1,
        };
        respuesta.push(elem);
      } else {
        for (let position of response.data.dreamlo.leaderboard.entry) {
          elem = { name: position.name, score: position.score, index: indice };
          indice++;
          respuesta.push(elem);
        }
      }
      return respuesta;
    })
    .catch(function (error) {
      console.log(error);
      throw error;
    });
}
