// Action Types
export const Types = {
  LOAD_REPOSITORIES_REQUEST: 'LOAD_REPOSITORIES_REQUEST',
  LOAD_REPOSITORIES_SUCCESS: 'LOAD_REPOSITORIES_SUCCESS',
  LOAD_REPOSITORIES_FAILURE: 'LOAD_REPOSITORIES_FAILURE',
};

// Action Creators
export const Creators = {
  loadRepositoriesRequest: () => ({
    type: Types.LOAD_REPOSITORIES_REQUEST,
  }),
  loadRepositoriesSuccess: data => ({
    type: Types.LOAD_REPOSITORIES_SUCCESS,
    payload: data,
  }),
  loadRepositoriesFailure: () => ({
    type: Types.LOAD_REPOSITORIES_FAILURE,
    payload: 'Erro ao carregar repositórios',
  }),
};

// Reducer
const INITIAL_STATE = {
  loading: false,
  error: false,
  data: [],
};

export default function repositories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_REPOSITORIES_REQUEST:
      return { ...state, loading: true };
    case Types.LOAD_REPOSITORIES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      };
    case Types.LOAD_REPOSITORIES_FAILURE:
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
}
