import TodoItem from "./TodoItem";

function TodoList(props: any) {
  return (
    <div className="grid grid-cols-4 gap-5 md:grid-cols-4">
      {props.todos.map((todo: any) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
}

export default TodoList;
