import AddProduct from "./components/AddProduct";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <section className="container-fluid">
        <section className="row">
          <section className="col-12">
            <AddProduct />
          </section>
        </section>
      </section>
    </>
  );
};

export default App;
