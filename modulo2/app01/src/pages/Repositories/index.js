import React, { Component } from 'react';
import {
  FlatList, View, AsyncStorage, ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Octicons';

import api from '~/services/api';

import Header from '~/components/Header';

import RepositoryItem from './RepositoryItem';
import styles from './styles';

const TabIcon = ({ tintColor }) => <Icon color={tintColor} name="repo" size={20} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default class Repositories extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  }

  state = {
    data: [],
    loading: true,
    refreshing: false,
  };

  componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    this.setState({ refreshing: true });

    const username = await AsyncStorage.getItem('@Githuber:username');
    const { data } = await api.get(`/users/${username}/repos`);

    this.setState({ data, refreshing: false, loading: false });
  };

  renderItem = ({ item }) => <RepositoryItem repository={item} />;

  renderList = () => {
    const { data, refreshing } = this.state;
    return (
      <FlatList
        data={data}
        style={styles.lista}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderItem}
        onRefresh={this.loadRepositories}
        refreshing={refreshing}
      />
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <View style={styles.container}>
        <Header title="Repositórios" />
        { loading ? <ActivityIndicator style={styles.loading} size={22} color="rgb(220, 117, 143)" /> : this.renderList()}
      </View>
    );
  }
}
