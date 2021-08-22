import React, { Component } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';

import { getUserData } from '../controllers/PuntosController';

import styles from '../styles.js';

const Item = ({ item }) => (
  <View style={styles.rowList}>
    <View style={styles.listItem}>
      <Text>{item.index}</Text>
    </View>
    <View style={styles.listItem}>
      <Text>{item.name}</Text>
    </View>
    <View style={styles.listItem}>
      <Text>{item.score}</Text>
    </View>
  </View>
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
        <Text style={styles.header}>TOP 25</Text>
        <View style={styles.containerLightList}>
          <View style={styles.rowList}>
            <View style={styles.listItem}>
              <Text>Position</Text>
            </View>
            <View style={styles.listItem}>
              <Text>Player</Text>
            </View>
            <View style={styles.listItem}>
              <Text>Score</Text>
            </View>
          </View>
          <FlatList
            style={styles.containerLista}
            data={this.state.datos}
            renderItem={renderItem}
            keyExtractor={item => item.name}
          />
        </View>
      </SafeAreaView>
    );
  }
}
