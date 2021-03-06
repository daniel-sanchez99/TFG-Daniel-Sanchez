import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: '10%',
    backgroundColor: 'rgb(46, 46, 46)',
  },
  containerLight: {
    alignItems: 'center',
    padding: '8%',
    backgroundColor: 'rgb(110, 110, 110)',
    borderRadius: 30,
  },
  containerLightList: {
    flex: 1,
    alignItems: 'center',
    padding: '8%',
    backgroundColor: 'rgb(110, 110, 110)',
    borderRadius: 30,
  },
  containerRespuestas: {
    backgroundColor: 'rgb(46, 46, 46)',
    padding: 20,
    textAlign: 'center',
  },
  containerPregunta: {
    textAlign: 'center',
    backgroundColor: 'rgb(100, 100, 100)',
    justifyContent: 'center',
    padding: 30,
    borderRadius: 50,
  },
  containerCategoria: {
    textAlign: 'center',
    backgroundColor: 'rgb(250, 250, 250)',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 50,
  },
  containerSmall: {
    backgroundColor: 'rgb(100, 100, 100)',
    padding: 15,
    borderRadius: 20,
    marginHorizontal: '5%',
    alignSelf: 'center',
  },
  button: {
    alignContent: 'center',
    marginVertical: 30,
    padding: '8%',
    borderWidth: 3,
    backgroundColor: 'white',
    borderBottomStartRadius: 20,
    borderTopEndRadius: 20,
  },
  buttonGo: {
    alignItems: 'center',
    paddingVertical: '5%',
    paddingHorizontal: '15%',
    borderWidth: 3,
    borderColor: 'white',
    margin: '15%',
    backgroundColor: 'rgb(105, 105, 105)',
    borderRadius: 30,
    fontSize: 30,
  },
  buttonOption: {
    backgroundColor: '#c7c7c7',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 20,
    marginVertical: '1%',
    marginHorizontal: '5%',
  },
  buttonSubmitted: {
    alignContent: 'center',
    marginVertical: 30,
    padding: '8%',
    borderWidth: 3,
    backgroundColor: 'rgb(105, 105, 105)',
    borderBottomStartRadius: 20,
    borderTopEndRadius: 20,
  },
  option: {
    alignItems: 'center',
    marginHorizontal: '2%',
    padding: '5%',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'rgb(105, 105, 105)',
  },
  selected: {
    padding: '7%',
    backgroundColor: 'white',
  },
  texto: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  textoN: {
    fontSize: 20,
    color: 'rgb(46, 46, 46)',
    fontWeight: 'bold',
  },
  textoP: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  textoGo: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  textoModeSelect: {
    color: 'white',
    fontSize: 20,
    marginTop: '10%',
    marginBottom: '5%',
  },
  titulo: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 50,
    marginTop: '5%',
    marginBottom: '20%',
  },
  header: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 40,
    marginTop: '10%',
    marginBottom: '5%',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  rowList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  textIn: {
    alignSelf: 'center',
    width: 200,
    height: 70,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 15,
    color: 'black',
    borderWidth: 3,
  },
  containerLista: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  listItem: {
    padding: '7%',
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default styles;
