function ProductList(props) {
  return (
    <>
      <ul>
        {props.list.map((text, index) => {
          return <li key={index}>{text}</li>;
        })}
      </ul>
    </>
  );
}

export default ProductList;
