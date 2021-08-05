import axios from 'axios';

import { ToastAndroid } from 'react-native';

export function actualizaPuntos(state) {
  state.racha += 1;
  state.puntos = state.puntos + state.racha * 10;
}

export async function subePuntuacion(puntos, nombre) {
  await getScoreUser(nombre).then(response => {
    console.log(response);
    if (response === '' || puntos > response) {
      ToastAndroid.show('New Record!', ToastAndroid.SHORT);
    }
  });
  axios
    .get(
      'http://dreamlo.com/lb/U_cKsyLTjEewwBMO3J_R2AmlU7jVyHUEmt1UPHV2y-8g/add/' +
        nombre +
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
//TODO si la lista esta vacia o solo 1 mensaje de error O en Leaderboard. Poner posicion tb
export function getUserData() {
  return axios
    .get('http://dreamlo.com/lb/610571cd8f40bb8ea051de90/json')
    .then(response => {
      let respuesta = [];
      type Elem = { name: string, score: number, index: number };
      let elem: Elem = {};
      let indice = 1;
      console.log(response.data.dreamlo);
      if (response.data.dreamlo.leaderboard === null) {
        elem = { name: 'Empty', score: 'Empty', index: 0 };
        respuesta.push(elem);
      } else if (Object.keys(response.data.dreamlo.leaderboard).length === 1) {
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
