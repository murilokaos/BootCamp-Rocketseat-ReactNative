import React from 'react';
import PropTypes from 'prop-types';
import {
  Image, Text, TouchableHighlight, View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const Card = ({ navigation, item }) => (
  <TouchableHighlight
    onPress={() => navigation.navigate('Issues', {
      repoName: item.name,
      fullName: item.fullName,
    })
    }
  >
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

Card.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  item: PropTypes.shape({
    name: PropTypes.string,
    fullName: PropTypes.string,
    ownerName: PropTypes.string,
    ownerAvatar: PropTypes.string,
  }).isRequired,
};

export default Card;
