import {
  LOAD_PHOTOS_LOADING,
  LOAD_PHOTOS_ERROR,
  LOAD_PHOTOS_SUCCESS,
  LOAD_SINGLE_PHOTO_ERROR,
  LOAD_SINGLE_PHOTO_LOADING,
  LOAD_SINGLE_PHOTO_SUCCESS,
  SHOW_MODAL,
  HIDE_MODAL,
} from "../actions/actions";

// Action creators для фото
export const loadPhotosLoadingAction = () => ({ type: LOAD_PHOTOS_LOADING });
export const loadPhotosErrorAction = (payload) => ({
  type: LOAD_PHOTOS_ERROR,
  payload,
});
export const loadPhotosSuccessAction = (payload) => ({
  type: LOAD_PHOTOS_SUCCESS,
  payload,
});

// Action creators для одного фото
export const loadSinglePhotoLoadingAction = (payload) => ({
  type: LOAD_SINGLE_PHOTO_LOADING,
  payload,
});
export const loadSinglePhotoErrorAction = (payload) => ({
  type: LOAD_SINGLE_PHOTO_ERROR,
  payload,
});
export const loadSinglePhotoSuccessAction = (payload) => ({
  type: LOAD_SINGLE_PHOTO_SUCCESS,
  payload,
});

// Action creators для модального окна
export const showModalAction = () => ({ type: SHOW_MODAL });
export const hideModalAction = () => ({ type: HIDE_MODAL });
