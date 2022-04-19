import { put, takeEvery } from "redux-saga/effects";
import PhotoServices from "../API/PhotoService";
import {
  loadPhotosSuccessAction,
  loadPhotosErrorAction,
  loadSinglePhotoSuccessAction,
  loadSinglePhotoErrorAction,
} from "../store/action-creators/action-creators";
import {
  LOAD_PHOTOS_LOADING,
  LOAD_SINGLE_PHOTO_LOADING,
} from "../store/actions/actions";
import { delay, fetchData } from "../utils/secondaryFunctions";

function* fetchPhotosWorker() {
  try {
    const data = yield fetchData(PhotoServices.getAll);
    yield delay(500);
    yield put(loadPhotosSuccessAction(data));
  } catch (e) {
    yield put(loadPhotosErrorAction(e.message));
  }
}

function* fetchSinglePhotoWorker(action) {
  try {
    const data = yield fetchData(() => PhotoServices.getById(action.payload));
    yield delay(500);
    yield put(loadSinglePhotoSuccessAction(data));
  } catch (e) {
    yield put(loadSinglePhotoErrorAction(e.message));
  }
}
export function* photosWatcher() {
  yield takeEvery(LOAD_PHOTOS_LOADING, fetchPhotosWorker);
  yield takeEvery(LOAD_SINGLE_PHOTO_LOADING, fetchSinglePhotoWorker);
}
