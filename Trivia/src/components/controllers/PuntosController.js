import axios from 'axios';

import { ToastAndroid } from 'react-native';

export function actualizaPuntos(state) {
  state.racha += 1;
  state.puntos = state.puntos + state.racha * 10;
}

//if los puntos >> los que estan subidos --> actualizar
export function subePuntuacion(puntos, nombre) {
  getScoreboardUser(nombre).then(response => {
    if (response === '' || response > puntos) {
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
export function getScoreboardUser(nombre) {
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
