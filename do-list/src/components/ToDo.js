import ToDoInput from "./ToDoInput";
import ToDoList from "./TodoList";
import ToDoHeader from "./ToDoHeader";

const ToDo = () => {
  return (
    <>
      <ToDoHeader />
      <ToDoInput />
      <ToDoList />
    </>
  );
};

export default ToDo;
