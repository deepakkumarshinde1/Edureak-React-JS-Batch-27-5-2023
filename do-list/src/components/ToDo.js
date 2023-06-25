import ToDoInput from "./ToDoInput";
import ToDoList from "./TodoList";
import ToDoHeader from "./ToDoHeader";

const ToDo = () => {
  return (
    <>
      <ToDoHeader text="Todo List Application"/>
      <ToDoInput />
      <ToDoList />
    </>
  );
};

export default ToDo;
