import { createSlice } from "@reduxjs/toolkit";

let ProductReducerSlice = createSlice({
  name: "productSlice",
  initialState: {
    productList: [],
    newProduct: {
      product_category: "",
      product_name: "",
      product_price: "",
      product_desc: "",
      product_rating: "",
      product_rating_count: "",
    },
    editProduct: {
      product_category: "",
      product_name: "",
      product_price: "",
      product_desc: "",
      product_rating: "",
      product_rating_count: "",
    },
  },
  reducers: {
    insertNewProduct: (state) => {
      state.productList = [...state.productList, { ...state.newProduct }];
      state.newProduct = {
        product_category: "",
        product_name: "",
        product_price: "",
        product_desc: "",
        product_rating: "",
        product_rating_count: "",
      };
    },
    updateInputChange: (state, action) => {
      let { value, name } = action.payload;
      state.newProduct[name] = value;
    },
    removeProduct: (state, action) => {
      let { id } = action.payload;
      state.productList.splice(id, 1); // remove product with array index
      // splice(index,delCount)
    },
  },
});

export default ProductReducerSlice.reducer;
export const { updateInputChange, insertNewProduct, removeProduct } =
  ProductReducerSlice.actions;
