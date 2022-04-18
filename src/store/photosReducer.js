const defaultState = {
  photos: [],
  photo: {},
};

export const SET_PHOTOS = "SET_PHOTOS";
export const FETCH_PHOTOS = "FETCH_PHOTOS";
export const SET_SINGLE_PHOTO = "SET_SINGLE_PHOTO";
export const FETCH_SINGLE_PHOTO = "FETCH_SINGLE_PHOTO";

export default function photosReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_PHOTOS:
      return { ...state, photos: action.payload };
    case SET_SINGLE_PHOTO:
      return { ...state, photo: action.payload };
    default:
      return state;
  }
}

export const setPhotosAction = (payload) => ({ type: SET_PHOTOS, payload });
export const fetchPhotosAction = () => ({ type: FETCH_PHOTOS });
export const setSinglePhotoAction = (payload) => ({
  type: SET_SINGLE_PHOTO,
  payload,
});
export const fetchSinglePhotoAction = (payload) => ({
  type: FETCH_SINGLE_PHOTO,
  payload,
});
