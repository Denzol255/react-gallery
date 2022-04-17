import { put, takeEvery, call } from "redux-saga/effects";
import { FETCH_PHOTOS, setPhotosAction } from "../store/photosReducer";

const fetchPhotosFromApi = () => {
  return fetch("https://jsonplaceholder.typicode.com/photos?_limit=24");
};

function* fetchPhotosWorker() {
  const data = yield call(fetchPhotosFromApi);
  const json = yield call(() => data.json());
  yield put(setPhotosAction(json));
}

export function* photosWatcher() {
  yield takeEvery(FETCH_PHOTOS, fetchPhotosWorker);
}
