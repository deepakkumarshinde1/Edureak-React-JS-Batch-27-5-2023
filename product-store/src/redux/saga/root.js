import { all } from "redux-saga/effects";
import {
  fetchProductListWatcher,
  getSingleProductWatcher,
} from "./productWatcher";

// combination of all watchers
export function* rooSaga() {
  // array watchers
  let watcherList = [fetchProductListWatcher(), getSingleProductWatcher()];
  yield all(watcherList);
}
