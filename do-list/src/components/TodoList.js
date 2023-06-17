import { useTodoContext } from "../context/ToDoContext";

const ToDoList = () => {
  let { todoList, updateTodoStatus } = useTodoContext();
  let toCompleteClass = "text-danger text-decoration-line-through fst-italic";
  return (
    <>
      <ul className="list-group">
        {todoList.map((todo, index) => {
          return (
            <li key={index} className="list-group-item">
              <input
                className="mx-2"
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => updateTodoStatus(index)}
              />
              <span className={todo.isCompleted ? toCompleteClass : ""}>
                {todo.title}
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ToDoList;
