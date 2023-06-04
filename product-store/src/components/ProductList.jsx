const ProductList = (props) => {
  let { productList } = props;
  // loop logic ==> map
  return (
    <>
      <section className="row">
        <section className="col-12">
          <p className="text-center h3 text-primary">Product List</p>
        </section>
        <section className="col-12 d-flex gap-2 flex-wrap">
          {productList.map((product, index) => {
            return (
              <div className="card width-30" key={index}>
                <img src="/images/img.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{product.product_name}</h5>
                  <p className="card-text">{product.product_desc}</p>
                  <div className="mb-2">
                    <span>
                      <i
                        class="fa fa-star text-warning me-1"
                        aria-hidden="true"
                      ></i>
                      {product.product_rating}
                      <i
                        class="fa fa-users text-primary ms-3 me-1"
                        aria-hidden="true"
                      ></i>
                      {product.product_rating_count}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-primary btn-sm">
                      <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                    </button>
                    <button className="btn btn-danger btn-sm">
                      <i class="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </section>
    </>
  );
};

export default ProductList;
