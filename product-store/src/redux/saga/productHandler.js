import { call, put } from "redux-saga/effects";
import { fetchProductList, getSingleProductService } from "./productService";
import { setSingleProduct, updateProductList } from "../productReducerSlice";
// handel api call
export function* fetchProductListHandler() {
  // api call
  console.log("handler is called");
  try {
    let { data } = yield call(fetchProductList);
    // dispatch
    yield put(updateProductList({ list: data }));
  } catch (error) {
    alert("Server Error");
  }
}

export function* getSingleProductHandler(action) {
  let id = action.payload;
  try {
    let { data } = yield call(getSingleProductService, id);
    // dispatch
    yield put(setSingleProduct({ product: data }));
  } catch (error) {
    alert("Server Error");
  }
}
