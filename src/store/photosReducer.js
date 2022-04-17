const defaultState = {
  photos: [],
};

export const SET_PHOTOS = "SET_PHOTOS";
export const FETCH_PHOTOS = "FETCH_PHOTOS";

export default function photosReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_PHOTOS:
      return { ...state, photos: action.payload };
    default:
      return state;
  }
}

export const setPhotosAction = (payload) => ({ type: SET_PHOTOS, payload });
export const fetchPhotosAction = () => ({ type: FETCH_PHOTOS });
