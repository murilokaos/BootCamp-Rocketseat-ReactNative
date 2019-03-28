import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    padding: 20,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 1,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'capitalize',
    color: '#595858',
  },
  subTitle: {
    fontSize: 13,
    color: '#C6C2C2',
    fontStyle: 'italic',
  },
  text: {
    fontSize: 12,
    color: '#777777',
    fontWeight: '400',
    paddingHorizontal: 5,
    paddingVertical: 10,
    textAlign: 'justify',
    letterSpacing: 0.5,
  },
  date: {
    fontSize: 12,
    fontWeight: '400',
    color: '#C6C2C2',
    fontStyle: 'italic',
    left: 0,
  },
  information: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
  },
});

const Post = ({
  title, author, text, dateCreated,
}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.information}>
      <Text style={styles.subTitle}>{author}</Text>
      <Text style={styles.date}>{dateCreated}</Text>
    </View>
    <Text style={styles.text}>{text}</Text>
  </View>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
};

export default Post;
