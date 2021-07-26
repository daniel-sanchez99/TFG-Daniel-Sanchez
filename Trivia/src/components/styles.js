import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    backgroundColor: 'rgb(46, 46, 46)',
    justifyContent: 'space-around',
    padding: 30,
  },
  containerPregunta: {
    alignItems: 'center',
    backgroundColor: 'rgb(100, 100, 100)',
    justifyContent: 'space-evenly',
    padding: 30,
    borderRadius: 50,
  },
  containerCategoria: {
    alignItems: 'center',
    backgroundColor: 'rgb(250, 250, 250)',
    justifyContent: 'space-evenly',
    padding: 20,
    borderRadius: 50,
  },
  containerPuntos: {
    backgroundColor: 'rgb(100, 100, 100)',
    padding: 15,
    borderRadius: 20,
    marginHorizontal: '5%',
  },
  containerVidas: {
    backgroundColor: 'rgb(100, 100, 100)',
    padding: 15,
    borderRadius: 20,
    marginHorizontal: '5%',
  },
  texto: {
    color: 'white',
    fontSize: 20,
  },
  textoP: {
    color: 'white',
    fontSize: 15,
  },
  textoN: {
    fontSize: 20,
  },
  titulo: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 60,
  },
  button: {
    backgroundColor: '#2bc400',
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderRadius: 8,
  },
  buttonOption: {
    backgroundColor: '#c7c7c7',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 8,
    marginHorizontal: '10%',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default styles;
