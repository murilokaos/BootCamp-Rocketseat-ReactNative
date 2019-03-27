import React from 'react';
import {
  View, Text, StyleSheet, Platform,
} from 'react-native';
import PropTypes from 'prop-types';

/** *
 *
 * Stateless component
 *
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: '#faa91aFF',
      },
      android: {
        backgroundColor: '#10a3b1FF',
      },
    }),
  },
});

const Todo = ({ title }) => (
  <View style={styles.container}>
    <Text>{title}</Text>
    {Platform.OS === 'ios' ? <Text>Ios</Text> : <Text>Android</Text>}
  </View>
);

Todo.defaultProps = {
  title: 'Todo Padrão',
};

Todo.propTypes = {
  title: PropTypes.string,
};

export default Todo;
