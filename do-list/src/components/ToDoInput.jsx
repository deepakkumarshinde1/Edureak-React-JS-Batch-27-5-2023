import { memo } from "react";
import { useTodoContext } from "../context/ToDoContext";

const ToDoInput = () => {
  console.log("toDoInput");
  let { inputRef, saveTodo } = useTodoContext();
  return (
    <>
      <form onSubmit={saveTodo}>
        <div className="input-group mb-3">
          <input
            ref={inputRef}
            type="text"
            className="form-control"
            placeholder="Add a todo item"
            onChange={() => {}}
          />
          <button
            className="input-group-text btn btn-outline-success"
            id="basic-addon1"
          >
            Save Todo
          </button>
        </div>
      </form>
    </>
  );
};

export default memo(ToDoInput);

// memo is called as hoc i.e higher component
// hoc are component act like a function and in there parameter we pass other component
