import { Routes, Route, useNavigate } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { useState } from "react";

const App = () => {
  // create navigate instance
  let navigate = useNavigate();
  let [productList, setProductList] = useState([]);
  let [newProduct, setNewProduct] = useState({
    product_category: "Electronics",
    product_name: "Dell Mouse",
    product_price: "499",
    product_desc: "Optical Mouse",
    product_rating: "4",
    product_rating_count: "500",
  });

  const saveNewProduct = (event) => {
    event.preventDefault(); // prevent default submitting
    console.log(newProduct);

    // save data in an array
    //create new array from old array product list
    let _newProductList = [...productList, { ...newProduct }];
    // let _newProductList = [...productList];
    // _newProductList.push({ ...newProduct });
    console.log(_newProductList);
    setProductList(_newProductList);
    setNewProduct({
      product_category: "Electronics",
      product_name: "Dell Mouse",
      product_price: "499",
      product_desc: "Optical Mouse",
      product_rating: "4",
      product_rating_count: "500",
    });
    alert("Product Added Successfully");
    // navigate to product list
    navigate("/product-list");
  };

  const inputChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    // create new object from old product
    // in react to update a state of object or array we need to create a new array/object every time
    // because object & array are store my memory reference in variable
    let _newProduct = { ...newProduct };
    _newProduct[name] = value; // _newProduct["product_name"] = "dell"
    // update state
    setNewProduct(_newProduct);
  };
  return (
    <>
      <Header />
      <section className="container-fluid">
        <section className="row">
          <section className="col-12">
            <Routes>
              <Route
                path="/add-product"
                element={
                  <AddProduct
                    saveNewProduct={saveNewProduct}
                    inputChange={inputChange}
                    newProduct={newProduct}
                  />
                }
              />

              <Route
                path="/product-list"
                element={<ProductList productList={productList} />}
              />
            </Routes>
          </section>
        </section>
      </section>
    </>
  );
};

export default App;
