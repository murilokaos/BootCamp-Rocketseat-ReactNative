import {
  all, takeLatest, put, call, select,
} from 'redux-saga/effects';
import api from '~/services/api';
import { Types as userTypes, Creators as userActions } from '~/store/ducks/user';
import { Creators as modalActions } from '~/store/ducks/modal';

function* user(action) {
  const username = action.payload;
  try {
    const { data } = yield call(api.get, `users/${username}`);

    const { coordinate } = yield select(state => state.modal);

    const isDuplicated = yield select(state => state.users.data.find(gituser => gituser.id === data.id));

    if (isDuplicated) {
      yield put(userActions.loadUserFailure('Usuário já existe!'));
    } else {
      const userData = {
        description: data.bio,
        coordinate,
        id: data.id,
        image: data.avatar_url,
        title: data.name,
        login: data.login,
      };
      yield put(userActions.loadUserSuccess(userData));
      yield put(modalActions.hideModal());
    }
  } catch (error) {
    yield put(userActions.loadUserFailure('Erro ao adicionar usuário!'));
  }
}

function* rootSaga() {
  yield all([takeLatest(userTypes.LOAD_USER_REQUEST, user)]);
}

export default rootSaga;
