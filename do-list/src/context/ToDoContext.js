import { createContext, useContext, useRef, useState } from "react";

// create a new context
const GlobalTodoContext = createContext({});

// create a provider (component)
export const TodoContextProvider = (props) => {
  let [todoList, setTodoList] = useState([]);

  // useRef give a way to connect with real dom logic
  // useRef collect data child to parent

  let inputRef = useRef();

  // save todo
  const saveTodo = (event) => {
    // prevent default submission
    event.preventDefault();
    let inputValue = inputRef.current.value;
    // check if input value is not empty
    if (inputValue !== "") {
      let newTodo = { title: inputValue, isCompleted: false };
      setTodoList([newTodo, ...todoList]);

      // reset input value
      inputRef.current.value = "";
    }
  };

  // updateTodoStatus
  const updateTodoStatus = (index) => {
    const _todoList = [...todoList];
    _todoList[index].isCompleted = !_todoList[index].isCompleted;
    //!true === false
    setTodoList(_todoList);
  };

  let store = {
    todoList,
    inputRef,
    saveTodo,
    updateTodoStatus,
  };

  return (
    <>
      <GlobalTodoContext.Provider value={store}>
        {props.children}
      </GlobalTodoContext.Provider>
    </>
  );
};

// create a custom hook :: we will use it to access a data of context
// useTodoContext is use in other components
export const useTodoContext = () => {
  return useContext(GlobalTodoContext);
};

// useTodoContext == useSelector (Redux)
