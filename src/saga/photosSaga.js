import { put, takeEvery, call } from "redux-saga/effects";
import PhotoServices from "../API/PhotoService";
import {
  FETCH_PHOTOS,
  FETCH_SINGLE_PHOTO,
  setPhotosAction,
  setSinglePhotoAction,
} from "../store/photosReducer";

function* fetchPhotosWorker() {
  const data = yield call(() => PhotoServices.getAll());
  yield put(setPhotosAction(data));
}

function* fetchSinglePhotoWorker(action) {
  const photo = yield call(() => PhotoServices.getById(action.payload));
  yield put(setSinglePhotoAction(photo));
}

export function* photosWatcher() {
  yield takeEvery(FETCH_PHOTOS, fetchPhotosWorker);
  yield takeEvery(FETCH_SINGLE_PHOTO, fetchSinglePhotoWorker);
}
