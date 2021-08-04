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
      for (let position of response.data.dreamlo.leaderboard.entry) {
        respuesta.push(position);
      }
      return respuesta;
    })
    .catch(function (error) {
      console.log(error);
      throw error;
    });
}
