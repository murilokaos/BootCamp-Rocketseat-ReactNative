// Types
export const Types = {
  LOAD_USER_REQUEST: 'LOAD_USER_REQUEST',
  LOAD_USER_SUCCESS: 'LOAD_USER_SUCCESS',
  LOAD_USER_FAILURE: 'LOAD_USER_FAILURE',
};

// Creators
export const Creators = {
  loadUserRequest: username => ({
    type: Types.LOAD_USER_REQUEST,
    payload: username,
  }),
  loadUserSuccess: data => ({
    type: Types.LOAD_USER_SUCCESS,
    payload: { data },
  }),
  loadUserFailure: () => ({ type: Types.LOAD_USER_REQUEST }),
};
// Reducer

const INITIAL_STATE = {
  loading: false,
  error: null,
  data: [],
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_USER_REQUEST:
      return { ...state, loading: true, error: null };
    case Types.LOAD_USER_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    case Types.LOAD_USER_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload.data],
        loading: false,
      };
    default:
      return { ...state };
  }
}
