import React, { Component } from 'react';

import { View, Text, StatusBar } from 'react-native';

import { colors } from '~/styles';

import styles from './styles';

export default class Repositories extends Component {
  state = {
    repositoryInput: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.secundary} />
        <Text style={styles.text}>Olá</Text>
      </View>
    );
  }
}
