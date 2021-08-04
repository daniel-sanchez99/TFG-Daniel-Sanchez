import React, { Component } from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity } from 'react-native';

import { getUserData } from '../controllers/PuntosController';

import styles from '../styles.js';

const Item = ({ item }) => (
  <TouchableOpacity style={styles.button}>
    <Text>{item.name}</Text>
  </TouchableOpacity>
);

const renderItem = ({ item }) => {
  return <Item item={item} />;
};

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = { datos: [] };
  }

  componentDidMount() {
    getUserData().then(response => {
      this.setState({ datos: response });
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>TOP 25</Text>
        <FlatList
          style={styles.containerLista}
          data={this.state.datos}
          renderItem={renderItem}
          keyExtractor={item => item.name}
        />
      </SafeAreaView>
    );
  }
}
