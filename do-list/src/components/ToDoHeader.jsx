import { useMemo, useState } from "react";

const ToDoHeader = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // const isEven = useMemo(() => {
  //   for (let index = 0; index < 1000; index++) {
  //     console.log("loop");
  //   }
  //   if (count % 2 === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }, [count]);

  // in use useMemo , don't support update a other state
  // in use callback , you can update a other state

  const isEven = useCallback(() => {
    for (let index = 0; index < 1000; index++) {
      console.log("loop");
    }
    if (count % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }, [count]);
  return (
    <>
      <p className="text-center h3 text-primary">Todo List Application</p>
      <hr />
      <h1>{count}</h1>
      <p>{isEven() == true ? "Even" : "Odd"}</p>

      <button onClick={() => setCount(count + 1)}>Inc Count 1</button>

      <h1>{count2}</h1>
      <button onClick={() => setCount2(count2 + 1)}>Inc Count 2</button>
    </>
  );
};

export default ToDoHeader;
