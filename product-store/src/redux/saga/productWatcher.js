// watcher function ==> which are user to watch the redux action

import { takeLatest } from "redux-saga/effects";
import { getServerProductList, getSingleProduct } from "../productReducerSlice";
import {
  fetchProductListHandler,
  getSingleProductHandler,
} from "./productHandler";

export function* fetchProductListWatcher() {
  console.log("watcher is called");
  yield takeLatest(getServerProductList.type, fetchProductListHandler);
}

export function* getSingleProductWatcher() {
  yield takeLatest(getSingleProduct.type, getSingleProductHandler);
}
