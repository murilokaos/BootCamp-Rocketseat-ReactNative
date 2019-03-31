import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import '~/config/ReactotronConfig';
import '~/config/ReactDevToolsConfig';

import Post from '~/components/Post';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#859398',
  },
});

export default class App extends Component {
  state = {
    posts: [
      {
        id: Math.random(),
        title: 'Aprendendo React Native',
        author: 'Murilo Henrique',
        text:
          'Este módulo nos traz a aprender react native na prática codandando sempre o melhor que temos para codar, e nunca podemos nos esquecer de que codar não é só escrever código, e sim pensar no código escrito.',
        createdAt: '27/03/2019',
      },
      {
        id: Math.random(),
        title: 'Aprendendo a compartilhar',
        author: 'Murilo Henrique',
        text:
          'Olá, neste curso o que mais temos aprendido é como pode ser forte a união do pensamento cod3r com a vontade de compartilhar, podemos observar isso no tanto que este mês foi movimentado e o tanto de gente que foi ajudada aqui na comunidade, louvemos a songoku por este feito.',
        createdAt: '27/03/2019',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <ScrollView style={styles.container}>
        {posts
          && posts.map(post => (
            <Post
              key={post.id}
              title={post.title}
              author={post.author}
              text={post.text}
              dateCreated={post.createdAt}
            />
          ))}
      </ScrollView>
    );
  }
}
