export function actualizaVidas(state, props) {
  state.vidas = state.vidas - 1;
  state.racha = 0;
  if (state.vidas <= 0) {
    props.navigation.navigate('EndScreen', { puntos: state.puntos });
  }
}
