import { useEffect } from "react";
import { Link } from "react-router-dom";

const ProductList = (props) => {
  let { productList, setProductList } = props;
  // loop logic ==> map

  // fetch() communicate with the server
  // fetch is a promise base api
  // fetch js method

  let getServerProductData = async () => {
    let url = "http://localhost:3004/products";
    let response = await fetch(url, { method: "GET" });
    let serverProduct = await response.json();
    setProductList([...productList, ...serverProduct]);
  };
  // react life cycle methods ==> useEffect()
  // on component load and only once ==> mounting

  //  initialization => only once
  //  loaded (mounting) => run only once ==> useEffect(  ()=>{} , [] )
  // [] ==> dependency array (states)
  //  update ==> run again and again ==> useEffect(  ()=>{} , [state,state] )
  //  unload unmounting ==> run only once ==> useEffect(  ()=>{  return ()=>{} } , [] )
  useEffect(() => {
    getServerProductData();
  }, []); // run only once

  useEffect(() => {
    return () => {
      console.log("unmounted");
    };
  }, []); // run only once

  return (
    <>
      <section className="row">
        <section className="col-12">
          <p className="text-center h3 text-primary">Product List</p>
        </section>
        <section className="col-12 d-flex gap-2 flex-wrap">
          {productList.length === 0 ? (
            <p className="text-center text-info w-100">
              No Product Found , Click <Link to="/add-product"> Here </Link> To
              Add New
            </p>
          ) : (
            productList.map((product, index) => {
              return (
                <div className="card width-30" key={index}>
                  <img
                    src={product.image}
                    className="card-img-top p-2"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {product.product_name.substring(0, 20)}...
                    </h5>
                    <p className="card-text card-desc">
                      {product.product_desc}
                    </p>
                    <div className="mb-2">
                      <span>
                        <i
                          className="fa fa-star text-warning me-1"
                          aria-hidden="true"
                        ></i>
                        {product.rating.product_rating}
                        <i
                          className="fa fa-users text-primary ms-3 me-1"
                          aria-hidden="true"
                        ></i>
                        {product.rating.product_rating_count}
                      </span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-primary btn-sm">
                        <i
                          className="fa fa-pencil-square-o"
                          aria-hidden="true"
                        ></i>
                      </button>
                      <button className="btn btn-danger btn-sm">
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </section>
      </section>
    </>
  );
};

export default ProductList;
