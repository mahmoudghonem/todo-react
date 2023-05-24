import { useContext } from "react";
import { TodoContext } from "../stores/Todo.store";

function TodoItem(props: any) {
  const context = useContext(TodoContext);
  const isTodoDone = context.isDone(props.todo.id) as boolean;

  function markAsDoneHandler() {
    if (isTodoDone) {
      context.removeDone(props.todo.id);
    } else {
      context.addDone({ title: props.todo.title, id: props.todo.id });
    }
  }
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.todo.title}
      </h5>
      <button
        onClick={markAsDoneHandler}
        className="items-end rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {isTodoDone ? "Mark As Undone" : "Mark As Done"}
      </button>
    </div>
  );
}

export default TodoItem;
