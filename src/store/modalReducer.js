const defaultState = {
  modal: false,
};

export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";

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

export const showModalAction = () => ({ type: SHOW_MODAL });
export const hideModalAction = () => ({ type: HIDE_MODAL });
