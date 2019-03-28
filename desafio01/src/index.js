import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import './config/ReactotronConfig';
import './config/DevToolsConfig';

export default class App extends Component {
  render() {
    return <View style={styles.container}>Hello World</View>;
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
