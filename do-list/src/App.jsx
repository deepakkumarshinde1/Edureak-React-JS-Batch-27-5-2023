import ToDo from "./components/ToDo";

function App() {
  return (
    <>
      <section className="container-fluid">
        <section className="row">
          <section className="col-12 col-lg-8 m-auto border border-2 p-2 round rounded-3 mt-3">
            <h1>My Text</h1>
            <ToDo />
          </section>
        </section>
      </section>
    </>
  );
}

export default App;
