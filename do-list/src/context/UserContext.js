import { createContext, useContext } from "react";

// create a new context
const UserContext = createContext({});

// create a provider (component)
export const UserContextProvider = (props) => {
  return (
    <>
      <UserContext.Provider value={store}>
        {props.children}
      </UserContext.Provider>
    </>
  );
};

// create a custom hook :: we will use it to access a data of context
// useTodoContext is use in other components
export const useTodoContext = () => {
  return useContext(UserContext);
};

// useTodoContext == useSelector (Redux)
