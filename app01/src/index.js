import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Todo from './components/todo';

import './config/ReactotronConfig';
import './config/DevToolsConfig';

/** *
 *
 * Statefull component
 *
 */

export default class App extends Component {
  state = {
    todos: [{ title: 'Fazer Café', id: 1 }, { title: 'Estudar Go Native', id: 2 }],
    // counter: 0,
  };

  addTodo = () => {
    const { todos } = this.state;
    this.setState({
      todos: [
        ...todos,
        {
          title: 'Novo Todo',
          id: Math.random(),
        },
      ],
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Todo title="Novo Todo - 1" />
        <Todo title="Novo Todo - 2" />
        <Todo title="Novo Todo - 3" />
        <Todo title="Novo Todo - 4" />
      </View>
    );
  }
}

// justifyContent controla o alinhamento no eixo do flexDirection
// o eixo oposto ao flexDirection é controlado pelo alignItems, porém
// só quando existe uma linha (com varias linhas utiliza o alignContent)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  box: {
    width: 80,
    height: 80,
    margin: 10,
    backgroundColor: '#f00',
    transform: [{ rotateZ: '20deg' }],
  },
  boxText: {
    color: '#fff',
  },
});
