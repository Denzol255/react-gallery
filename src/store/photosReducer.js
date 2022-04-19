import {
  LOAD_PHOTOS_LOADING,
  LOAD_PHOTOS_ERROR,
  LOAD_PHOTOS_SUCCESS,
  LOAD_SINGLE_PHOTO_ERROR,
  LOAD_SINGLE_PHOTO_LOADING,
  LOAD_SINGLE_PHOTO_SUCCESS,
} from "./actions/actions";

const defaultState = {
  loading: false,
  error: "",
  photos: [],
  singlePhoto: {},
};

// Reducer для получения фото
export default function photosReducer(state = defaultState, action) {
  switch (action.type) {
    case LOAD_PHOTOS_LOADING:
      return { ...state, loading: true, error: "" };
    case LOAD_PHOTOS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case LOAD_PHOTOS_SUCCESS:
      return { ...state, loading: false, photos: action.payload };
    case LOAD_SINGLE_PHOTO_LOADING:
      return { ...state, loading: true, error: "" };
    case LOAD_SINGLE_PHOTO_ERROR:
      return { ...state, loading: false, error: action.payload };
    case LOAD_SINGLE_PHOTO_SUCCESS:
      return { ...state, loading: false, singlePhoto: action.payload };
    default:
      return state;
  }
}
