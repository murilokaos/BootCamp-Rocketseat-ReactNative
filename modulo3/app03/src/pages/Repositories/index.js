import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActivityIndicator } from 'react-native';
import {
  Card,
  CardDescription,
  Container,
  Error,
  Image,
  List,
  TextDescription,
  TextLabel,
} from './styles';
import * as Colors from '~/services/colors';
import { Creators as repositoriesActions } from '~/store/ducks/repositories';

class Login extends Component {
  static propTypes = {
    loadRepositoriesRequest: PropTypes.func.isRequired,
    repositories: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.bool,
      data: PropTypes.arrayOf({
        id: PropTypes.number,
        description: PropTypes.string,
        name: PropTypes.string,
        owner: PropTypes.shape({
          avatar_url: PropTypes.string,
        }),
      }),
    }).isRequired,
  };

  componentDidMount() {
    const { loadRepositoriesRequest } = this.props;

    loadRepositoriesRequest();
  }

  render() {
    const { repositories } = this.props;
    return (
      <Container>
        {repositories.loading && <ActivityIndicator size="large" color={Colors.white} />}
        {repositories.error && <Error>Ocorreu um erro ao buscar repositórios do usuário!</Error>}
        <List showsVerticalScrollIndicator={false}>
          {repositories.data.map(item => (
            <Card key={item.id}>
              <Image source={{ uri: item.owner.avatar_url }} />
              <CardDescription>
                <TextLabel>{item.name}</TextLabel>
                <TextDescription>{item.description}</TextDescription>
              </CardDescription>
            </Card>
          ))}
        </List>
      </Container>
    );
  }
}

const mapStateToProps = ({ repositories }) => ({
  repositories,
});

const mapDispatchToProps = dispatch => bindActionCreators(repositoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
