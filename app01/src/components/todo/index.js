import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

/** *
 *
 * Stateless component
 *
 */

const Todo = ({ title }) => (
  <View style={styles.container}>
    <Text>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f554',
  },
});

Todo.defaultProps = {
  title: 'Todo Padrão',
};

Todo.propTypes = {
  title: PropTypes.string,
};

export default Todo;
