import React, { Component } from 'react';
import {
  View, FlatList, ActivityIndicator, AsyncStorage,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

import api from '~/services/api';
import Header from '~/components/Header';

import OrganizationItem from './OrganizationItem';

import styles from './styles';

const TabIcon = ({ tintColor }) => <Icon color={tintColor} name="md-business" size={20} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default class Organizations extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  }

  state = {
    data: [],
    refreshing: false,
    loading: true,
  };

  componentDidMount() {
    this.loadOrganizations();
  }

  loadOrganizations = async () => {
    this.setState({ refreshing: true });

    const username = await AsyncStorage.getItem('@Githuber:username');
    const { data } = await api.get(`/users/${username}/orgs`);

    this.setState({ data, loading: false, refreshing: false });
  }

  renderItem = ({ item }) => <OrganizationItem organization={item} />;

  renderList = () => {
    const { data, refreshing } = this.state;

    return (
      <FlatList
        data={data}
        columnWrapperStyle={styles.columnWrapper}
        numColumns={2}
        renderItem={this.renderItem}
        keyExtractor={item => String(item.id)}
        onRefresh={this.loadOrganizations}
        refreshing={refreshing}
      />
    );
  };

  render() {
    const { loading } = this.state;
    return (
      <View style={styles.container}>
        <Header title="Organizações" />
        {loading ? (
          <ActivityIndicator style={styles.loading} size={22} color="rgb(220, 117, 143)" />
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}
