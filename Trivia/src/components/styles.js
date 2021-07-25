import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(46, 46, 46)',
    justifyContent: 'space-evenly',
    padding: 30,
  },
  texto: {
    color: 'white',
    fontSize: 20,
  },
  textoP: {
    color: 'white',
    fontSize: 5,
  },
  textoN: {
    fontSize: 20,
  },
  titulo: {
    fontWeight: 'bold',
    marginTop: 30,
    color: 'white',
    fontSize: 40,
  },
  button: {
    backgroundColor: '#2bc400',
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderRadius: 8,
    marginHorizontal: '10%',
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
