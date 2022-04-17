import { put, takeEvery, call } from "redux-saga/effects";
import PhotoServices from "../API/PhotoService";
import { FETCH_PHOTOS, setPhotosAction } from "../store/photosReducer";

function* fetchPhotosWorker() {
  const data = yield call(() => PhotoServices.getAll());
  yield put(setPhotosAction(data));
}

export function* photosWatcher() {
  yield takeEvery(FETCH_PHOTOS, fetchPhotosWorker);
}
