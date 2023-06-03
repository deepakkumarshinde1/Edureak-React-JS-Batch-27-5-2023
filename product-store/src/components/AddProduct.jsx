import { useState } from "react";

const AddProduct = () => {
  let [productList, setProductList] = useState([]);
  let [newProduct, setNewProduct] = useState({
    product_category: "",
    product_name: "",
    product_price: "",
    product_desc: "",
    product_rating: "",
    product_rating_count: "",
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
      product_category: "",
      product_name: "",
      product_price: "",
      product_desc: "",
      product_rating: "",
      product_rating_count: "",
    });
    alert("Product Added Successfully");
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
      <section className="row">
        <section className="col-lg-4 col-10 m-auto card p-3 mt-2">
          <p className="h3 text-center text-danger">Add Product</p>
          <form onSubmit={saveNewProduct}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="product_name"
                value={newProduct.product_name}
                onChange={inputChange}
              />
              <label>Product Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Price"
                name="product_price"
                onChange={inputChange}
                value={newProduct.product_price}
              />
              <label>Product Price</label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                rows={10}
                placeholder="Desc"
                name="product_desc"
                onChange={inputChange}
                value={newProduct.product_desc}
              ></textarea>
              <label>Product Desc</label>
            </div>
            <div className="form-floating mb-3">
              <select
                className="form-select"
                name="product_category"
                onChange={inputChange}
                value={newProduct.product_category}
              >
                <option value="">Select</option>
                <option value="Men's Clothing">Men's Clothing</option>
                <option value="Jewelry">Jewelry</option>
                <option value="Electronics">Electronics</option>
              </select>
              <label>Product Desc</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="rate"
                name="product_rating"
                value={newProduct.product_rating}
                onChange={inputChange}
              />
              <label>Product Rating</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                placeholder="rate count"
                className="form-control"
                name="product_rating_count"
                onChange={inputChange}
                value={newProduct.product_rating_count}
              />
              <label>Product Rating Count</label>
            </div>
            <div className="text-center">
              <button className="btn btn-success mx-2" type="submit">
                Save
              </button>
              <button className="btn btn-danger" type="reset">
                Reset
              </button>
            </div>
          </form>
        </section>
      </section>
    </>
  );
};

export default AddProduct;
