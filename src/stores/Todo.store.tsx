import { createContext, useState } from "react";

// Define the initial state of the store
const todoInitialState = {
  doneTodos: [],
  count: 0,
  addDone: (todo: any) => {},
  removeDone: (todo_id: string) => {},
  isDone: (todo_id: string):any=>{},
};

// Create the context object
export const TodoContext = createContext(todoInitialState);

// Create the provider component
function TodoContextProvider(props: any) {
  const [doneTodos, setDoneTodos] = useState([]);

  function addDoneTodoHandler(todo: any) {
    setDoneTodos((pervDoneTodos: any) => {
      return pervDoneTodos.concat(todo);
    });
  }

  function removeDoneTodoHandler(todo_id: string) {
    setDoneTodos((pervDoneTodos: any) => {
      return pervDoneTodos.filter((item: any) => item.id !== todo_id);
    });
  }

  function isTodoDoneHandler(todo_id: string):boolean {
    return doneTodos.some((item: any) => item.id === todo_id);
  }

  const context = {
    doneTodos: doneTodos,
    count: doneTodos.length,
    addDone: addDoneTodoHandler,
    removeDone: removeDoneTodoHandler,
    isDone: isTodoDoneHandler,
  };

  return (
    <TodoContext.Provider value={context}>
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;
