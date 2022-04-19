import {
  LOAD_PHOTOS_LOADING,
  LOAD_PHOTOS_ERROR,
  LOAD_PHOTOS_SUCCESS,
  LOAD_SINGLE_PHOTO_ERROR,
  LOAD_SINGLE_PHOTO_LOADING,
  LOAD_SINGLE_PHOTO_SUCCESS,
} from "../actions/actions";

// Экшн креаторы для фото
export const loadPhotosLoadingAction = () => ({ type: LOAD_PHOTOS_LOADING });
export const loadPhotosErrorAction = (payload) => ({
  type: LOAD_PHOTOS_ERROR,
  payload,
});
export const loadPhotosSuccessAction = (payload) => ({
  type: LOAD_PHOTOS_SUCCESS,
  payload,
});

// Экшн креаторы для одного фото
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
