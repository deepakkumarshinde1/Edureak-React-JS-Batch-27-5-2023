// base api call
import axios from "axios";

export const fetchProductList = () => {
  console.log("service is called");
  let url = "http://localhost:3004/products";
  return axios.get(url);
};

export const getSingleProductService = (id) => {
  let url = "http://localhost:3004/products/" + id;
  return axios.get(url);
};
