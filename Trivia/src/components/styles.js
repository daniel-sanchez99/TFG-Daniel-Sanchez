import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    backgroundColor: 'rgb(46, 46, 46)',
    justifyContent: 'space-evenly',
    padding: 20,
  },
  containerLista: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  containerRespuestas: {
    backgroundColor: 'rgb(46, 46, 46)',
    padding: 20,
  },
  containerPregunta: {
    alignItems: 'center',
    backgroundColor: 'rgb(100, 100, 100)',
    justifyContent: 'center',
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
    marginHorizontal: '3%',
  },
  buttonGrey: {
    backgroundColor: '#c7c7c7',
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderRadius: 8,
    marginHorizontal: '3%',
  },
  buttonOption: {
    backgroundColor: '#c7c7c7',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 20,
    marginVertical: '1%',
    marginHorizontal: '5%',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textIn: {
    alignSelf: 'center',
    width: 200,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 15,
    color: 'black',
  },
});

export default styles;
