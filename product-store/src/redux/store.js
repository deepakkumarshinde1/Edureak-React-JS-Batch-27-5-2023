import { configureStore } from "@reduxjs/toolkit";
import reducer from "./combineReducer";
import createSagaMiddleware from "redux-saga";
import { rooSaga } from "./saga/root";

let sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// then run the saga
sagaMiddleware.run(rooSaga);

export default store;
