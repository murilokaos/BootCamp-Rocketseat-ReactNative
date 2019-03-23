import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

/** *
 *
 * Stateless component
 *
 */

const Todo = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

const styles = StyleSheet.create({});

Todo.defaultProps = {
  title: 'Todo Padrão',
};

Todo.propTypes = {
  title: PropTypes.string,
};

export default Todo;
