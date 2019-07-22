import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Box,
  BoxButton,
  BoxContainer,
  BoxInput,
  Button,
  Error,
  Label,
  Loading,
  UserModal,
  Title,
} from './styles';
import { Creators as modalActions } from '~/store/ducks/modal';
import { Creators as userActions } from '~/store/ducks/user';

const ModalScreen = ({
  hideModal, loading, error, ...props
}) => {
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const { loadUserRequest } = props;
    if (username.length) {
      loadUserRequest(username);
    }
    setUsername('');
  }

  function closeModal() {
    hideModal();
    setUsername('');
  }

  return (
    <UserModal animationType="slide" transparent {...props}>
      <BoxContainer>
        <Box>
          <Title>Adicionar nova localização</Title>
          {!!error && <Error>{error}</Error>}
          <BoxInput
            value={username}
            onChangeText={text => setUsername(text)}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Usuário no Github"
          />
          <BoxButton>
            <Button right onPress={closeModal} backgroundColor="#999">
              <Label>Cancelar</Label>
            </Button>
            <Button left onPress={handleSubmit}>
              {loading ? <Loading /> : <Label>Adicionar</Label>}
            </Button>
          </BoxButton>
        </Box>
      </BoxContainer>
    </UserModal>
  );
};

const mapStateToProps = ({ users }) => ({
  loading: users.loading,
  error: users.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...modalActions,
    ...userActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalScreen);
