import React from 'react';
import PropTypes from 'prop-types';
import {
  Image, Text, TouchableHighlight, View, Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';

const Card = ({ item }) => (
  <TouchableHighlight onPress={() => Linking.openURL(item.url)}>
    <View style={styles.itemIssue}>
      <Image source={{ uri: item.avatar }} style={styles.imgIssue} />
      <View style={styles.textContainer}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.titleIssue}>
          {item.title}
        </Text>
        <Text style={styles.ownerIssue}>{item.username}</Text>
        <View style={styles.stateContainer}>
          <Icon size={11} name={`door-${item.state}`} style={styles.iconIssue} />
          <Text style={styles.state}>{item.state === 'open' ? 'Aberta' : 'Fechada'}</Text>
        </View>
      </View>
      <Icon size={14} name="chevron-right" style={styles.iconIssue} />
    </View>
  </TouchableHighlight>
);

Card.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    username: PropTypes.string,
    avatar: PropTypes.string,
    url: PropTypes.string,
    state: PropTypes.string,
  }).isRequired,
};

export default Card;
