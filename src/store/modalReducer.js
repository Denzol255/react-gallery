import { SHOW_MODAL, HIDE_MODAL } from "./actions/actions";

const defaultState = {
  modal: false,
};

// Reducer для отображения модального окна
export default function modalReducer(state = defaultState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, modal: true };
    case HIDE_MODAL:
      return { ...state, modal: false };
    default:
      return state;
  }
}
