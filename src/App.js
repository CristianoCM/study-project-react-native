import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar';
import { Inverter, MegaSena } from './componentes/Multi';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Simples texto="Vamos nessa"></Simples>
        <ParImpar numero={23}></ParImpar>
        <Inverter texto="Vamos reverter este texto"></Inverter>
        <MegaSena qtdmax={6}></MegaSena>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
