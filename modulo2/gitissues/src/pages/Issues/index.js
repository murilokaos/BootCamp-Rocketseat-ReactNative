import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text, View, FlatList, TouchableHighlight,
} from 'react-native';
import api from '~/services/api';
import CardIssue from '~/components/CardIssue';

import styles, { firstButton, lastButton } from './styles';

class Issues extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('repoName', ''),
  });

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      getParam: PropTypes.func,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    const { navigation } = this.props;

    this.state = {
      fullName: navigation.getParam('fullName', ''),
      selected: 'all',
      issues: [],
      refreshing: false,
    };
  }

  async componentDidMount() {
    await this.getIssues('all');
  }

  getIssues = async (type) => {
    // https://api.github.com/repos/react-community/react-navigation/issues
    const { fullName } = this.state;
    this.setState({ refreshing: true });
    try {
      const { data } = await api.get(`/repos/${fullName}/issues?state=${type}`);
      const selectedFields = data.reduce((acc, item) => (
        [...acc, {
          id: item.id,
          title: item.title,
          username: item.user.login,
          avatar: item.user.avatar_url,
          url: item.html_url,
          state: item.state,
        }]
      ), []);
      return this.setState({ issues: selectedFields, selected: type, refreshing: false });
    } catch (error) {
      if (__DEV__) console.tron.log(error);
      return this.setState({ refreshing: false });
    }
  };

  render() {
    const { selected, refreshing, issues } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.buttons}>
          <TouchableHighlight style={firstButton} onPress={() => this.getIssues('all')}>
            <Text style={selected === 'all' ? styles.selected : styles.textButton}>Todas</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={() => this.getIssues('open')}>
            <Text style={selected === 'open' ? styles.selected : styles.textButton}>Abertas</Text>
          </TouchableHighlight>
          <TouchableHighlight style={lastButton} onPress={() => this.getIssues('closed')}>
            <Text style={selected === 'closed' ? styles.selected : styles.textButton}>
              Fechadas
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.issues}>
          <FlatList
            data={issues}
            renderItem={({ item }) => <CardIssue item={item} />}
            refreshing={refreshing}
            onRefresh={() => this.getIssues(selected)}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </View>
    );
  }
}

export default Issues;
