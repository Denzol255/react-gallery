import { applyMiddleware, combineReducers, createStore } from "redux";
import photosReducer from "./photosReducer";
import createSagaMiddleware from "@redux-saga/core";
import { rootWatcher } from "../saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  photos: photosReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);
