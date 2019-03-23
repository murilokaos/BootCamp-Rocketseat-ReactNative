import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Todo from './components/todo';

/***
 *
 * Statefull component
 *
 */

export default class App extends Component {
  state = {
    todos: [{ title: 'Fazer Café', id: 1 }, { title: 'Estudar Go Native', id: 2 }],
    counter: 0,
  };

  /**
   * Ciclos de vida
   * componentDidMount
   * getDerivedStateFromProps
   * shouldComponentUpdate
   * componentDidUpdate
   * componentWillUnmount
   */

  /**
   * Executado assim que o component é montado!
   */
  componentDidMount() {
    setTimeout(() => {
      this.setState({ text: 'Hello World' });
    }, 3000);
  }

  /**
   * NUNCA ATUALIZAR O ESTADO OU MUDAR PROPS DENTRO DESSAS FUNÇÕES
   * {
   * getDerivedStateFromProps
   * shouldComponentUpdate
   * componentDidUpdate
   * componentWillUnmount
   * }
   */

  /***
   * Executado antes do componentDidMount e DidUpdate
   * Somente utilizado quando temos uma propriedade no state que depende de alguma props;
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    return { text: nextProps.title };
  }

  /**
   * Executado antes de qualquer atualização no component
   */

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.counter > this.state.counter && nextState.counter <= 5) return true;
    if (nextState.todos !== this.state.todos) return true;
  }

  /**
   * Executado depois que o component é atualizado, após o should por exemplo
   */

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.todos !== this.state.todos) {
      return true;
    }
  }

  /**
   * Executado antes do component ser destruído
   */
  componentWillUnmount() {
    /**
     * Utilizado geralmente para remover eventListeners criados no componentDidMount
     */
  }

  handleCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  addTodo = () => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          title: 'Novo Todo',
          id: Math.random(),
        },
      ],
    });
  };

  render() {
    return (
      /** View = div no html */
      // Importante, as tags de jsx não possuem Semântica e nem Styles próprios.
      <View style={styles.container}>
        {this.state.todos.map(todo => (
          <Todo title={todo.title} key={todo.id} />
        ))}
        <Button onPress={() => this.addTodo()} title="Adicionar Todo" />
        <Button onPress={() => this.handleCounter()} title="Adicionar Counter" />
        <Text>{this.state.counter}</Text>
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
