import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AsyncStorage,
  FlatList,
  Image,
  Keyboard,
  StatusBar,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '~/services/api';

import styles from './styles';

class Repositories extends Component {
  static navigationOptions = {
    headerTitle: "Git Issue's",
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  }

  state = {
    repositoryInput: '',
    repos: [],
    refreshing: false,
    error: '',
  };

  async componentDidMount() {
    await this.renderRepositories();
  }

  renderRepositories = async () => {
    try {
      await AsyncStorage.getItem('@GitIssues:repos').then(db => !!db && this.setState({
        repos: JSON.parse(db),
      }, () => {
        const { repos } = this.state;
        repos.map(item => this.setRepository(item.fullName));
      }));
    } catch (error) {
      this.setState({
        error: `Não foi possível recuperar os repositórios da memória.
          Insira novos e aproveite.`,
      });
    }
  };

  setRepository = async (name = null) => {
    const { repos, repositoryInput } = this.state;
    this.setState({ refreshing: true });
    try {
      const { data } = await api.get(`/repos/${name || repositoryInput}`);
      const newRepos = repos.filter(el => el.id !== data.id);
      this.setState(
        {
          repos: [
            ...newRepos,
            {
              id: data.id,
              name: data.name,
              ownerName: data.owner.login,
              ownerAvatar: data.owner.avatar_url,
              fullName: data.full_name,
            },
          ],
          repositoryInput: '',
          refreshing: false,
          error: '',
        },
        async () => {
          const { repos: reposGoToAsync } = this.state;
          await AsyncStorage.setItem('@GitIssues:repos', JSON.stringify(reposGoToAsync));
        },
      );
      Keyboard.dismiss();
    } catch (error) {
      this.setState({
        error: 'Este repositório parece não existir.',
        refreshing: false,
        repositoryInput: '',
      });
    }
  };

  renderItem = (item) => {
    const { navigation } = this.props;
    return (
      <TouchableHighlight onPress={() => navigation.navigate('Issues')}>
        <View style={styles.itemRepo}>
          <Image source={{ uri: item.ownerAvatar }} style={styles.imgRepo} />
          <View style={styles.textContainer}>
            <Text style={styles.titleRepo}>{item.name}</Text>
            <Text style={styles.ownerRepo}>{item.ownerName}</Text>
          </View>
          <Icon size={14} name="chevron-right" style={styles.iconRepo} />
        </View>
      </TouchableHighlight>
    );
  };

  render() {
    const {
      repos,
      repositoryInput,
      refreshing,
      error,
    } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#694982" />
        <View style={styles.containerInput}>
          <TextInput
            style={styles.textInput}
            onChangeText={e => this.setState({ repositoryInput: e })}
            placeholder="Adicionar novo repositório"
            placeholderTextColor="#23152E7F"
            autoCapitalize="none"
            autoCorrect={false}
            value={repositoryInput}
            onSubmitEditing={() => this.setRepository()}
            returnKeyType="search"
          />
          <TouchableHighlight onPress={() => this.setRepository()}>
            <Icon style={styles.icon} size={22} name="plus" />
          </TouchableHighlight>
        </View>
        <View style={styles.repos}>
          {!!error && <Text style={styles.notFound}>{error}</Text>}
          <FlatList
            data={repos}
            renderItem={({ item }) => this.renderItem(item)}
            refreshing={refreshing}
            onRefresh={this.renderRepositories}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </View>
    );
  }
}

export default Repositories;
