export function actualizaPuntos(state) {
  state.racha += 1;
  state.puntos = state.puntos + state.racha * 10;
}
