import { useContext } from "react";
import TodoList from "../components/TodoList";
import { TodoContext } from "../stores/Todo.store";

function DoneTodoList() {
  const context = useContext(TodoContext)
  return (
    <div className="p-3">
      <TodoList todos={context.doneTodos} />
    </div>
  );
}

export default DoneTodoList;
