import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActivityIndicator } from 'react-native';
import {
  Button, ButtonText, Container, Input, Error,
} from './styles';
import { Creators as loginActions } from '~/store/ducks/login';

class Login extends Component {
  state = {
    username: '',
  };

  static propTypes = {
    loginRequest: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
  };

  login = () => {
    const { username } = this.state;
    const { loginRequest } = this.props;

    loginRequest(username);
  };

  render() {
    const { username } = this.state;
    const { loading, error } = this.props;
    return (
      <Container>
        <Input
          placeholder="Digite seu nome de usuário"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="done"
          value={username}
          onChangeText={text => this.setState({ username: text })}
          onSubmitEditing={this.login}
        />
        {error && <Error>Erro ao carregar dados do usuário</Error>}
        <Button onPress={this.login}>
          {!loading ? (
            <ButtonText>Login</ButtonText>
          ) : (
            <ActivityIndicator size="small" color="white" />
          )}
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = ({ login }) => ({
  loading: login.loading,
  error: login.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(loginActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
