import {
  all, call, put, takeLatest, select,
} from 'redux-saga/effects';
import { Creators as loginActions, Types as loginTypes } from '~/store/ducks/login';
import {
  Creators as repositoriesActions,
  Types as repositoriesTypes,
} from '~/store/ducks/repositories';

import api from '~/services/api';
import { navigate } from '~/services/navigation';

function* login(action) {
  try {
    const { username } = action.payload;

    yield call(api.get, `/users/${username}`);

    yield put(loginActions.loginSuccess(username));

    navigate('Repositories');
  } catch (error) {
    yield put(loginActions.loginFailure());
  }
}

function* loadRepositories() {
  try {
    const { username } = yield select(state => state.login);

    const { data } = yield call(api.get, `/users/${username}/repos`);

    yield put(repositoriesActions.loadRepositoriesSuccess(data));
  } catch (error) {
    yield put(repositoriesActions.loadRepositoriesFailure());
  }
}

export default function* rootSaga() {
  return yield all([
    takeLatest(loginTypes.LOGIN_REQUEST, login),
    takeLatest(repositoriesTypes.LOAD_REPOSITORIES_REQUEST, loadRepositories),
  ]);
}
