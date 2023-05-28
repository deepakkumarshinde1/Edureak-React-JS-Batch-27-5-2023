import { useState } from "react";
import ProductList from "./ProductList";

function AddProduct() {
  let [text, setText] = useState(""); // returns a array :: [value,updateState]
  let [list, setList] = useState([]);
  let changeText = (event) => {
    // setText :: update the state
    // setText(1234);
    // if (event.code === "Enter") {
    let newText = event.target.value;
    setText(newText);
    // }
  };

  let saveToList = () => {
    // save list
    let newList = [...list, text]; // concat & create a new array
    setList(newList);
    setText("");
  };
  return (
    <>
      <h1 className="text-red">Product List</h1>
      <input type="text" onChange={changeText} value={text} />
      <button onClick={saveToList}>Save</button>
      <ProductList list={list} />
    </>
  );
}

export default AddProduct;
