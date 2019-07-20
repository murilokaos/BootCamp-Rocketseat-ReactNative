import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
  },
});

const App = () => (
  <View style={styles.body}>
    <Text>Hello World, i&apos;m React Native</Text>
  </View>
);

export default App;
