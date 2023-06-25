import { memo } from "react";
import { useTodoContext } from "../context/ToDoContext";

const ToDoInput = () => {
  let { input, setInput, saveTodo } = useTodoContext();
  return (
    <>
      <form>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add a todo item"
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
          <button
            className="input-group-text btn btn-outline-success"
            id="basic-addon1"
            style={{ opacity: 1 }}
            type="submit"
            onClick={saveTodo}
            data-testid="submit-button"
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
