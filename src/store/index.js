import { applyMiddleware, combineReducers, createStore } from "redux";
import photosReducer from "./photosReducer";
import createSagaMiddleware from "@redux-saga/core";
import { rootWatcher } from "../saga";
import modalReducer from "./modalReducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  photos: photosReducer,
  modal: modalReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);
