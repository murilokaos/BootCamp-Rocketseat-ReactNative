// Types
export const Types = {
  SHOW_MODAL: 'SHOW_MODAL',
  HIDE_MODAL: 'HIDE_MODAL',
};

// Creators
export const Creators = {
  showModal: coordinate => ({
    type: Types.SHOW_MODAL,
    payload: coordinate,
  }),
  hideModal: () => ({
    type: Types.HIDE_MODAL,
  }),
};
// Reducer

const INITIAL_STATE = {
  isVisible: false,
  coordinate: null,
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_MODAL:
      return { isVisible: true, coordinate: action.payload };
    case Types.HIDE_MODAL:
      return { isVisible: false, coordinate: null };
    default:
      return { ...state };
  }
}
