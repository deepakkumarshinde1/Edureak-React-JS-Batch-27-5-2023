import { useState } from "react";

const ToDoHeader = (props) => {
  return (
    <>
      <p className="text-center h3 text-primary">{props.text}</p>
    </>
  );
};

export default ToDoHeader;
