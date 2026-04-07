// TodoList.jsx
import { useTodoStore } from "../../../store/state-mamangement-exercise-stores/todoStore";
import TodoItem from "./TodoItem";
import { useMemo } from "react";

export default function TodoList() {
  // Subscribe to the actual state values
  const todos = useTodoStore((s) => s.todos);
  const filter = useTodoStore((s) => s.filter);
  const searchQuery = useTodoStore((s) => s.searchQuery);

  // Compute filtered todos in the component with useMemo
  const filteredTodos = useMemo(() => {
    let result = todos;

    if (filter === "active") result = result.filter((t) => !t.done);
    if (filter === "completed") result = result.filter((t) => t.done);

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter((t) => t.text.toLowerCase().includes(query));
    }

    return result;
  }, [todos, filter, searchQuery]);

  if (filteredTodos.length === 0) return <p>No todos were found</p>;

  return (
    <div>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}