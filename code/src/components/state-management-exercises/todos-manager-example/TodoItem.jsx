import { useTodoStore } from "../../../store/todoStore";

export default function TodoItem({ todo }) {
  const toggleTodo = useTodoStore((s) => s.toggleTodo);
  const deleteTodo = useTodoStore((s) => s.deleteTodo);

  return (
    <div
    className={`todo-item ${todo.done ? "completed" : ""}`}
    >
    <label className="flex items-center gap-2">
        <input
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleTodo(todo.id)}
        />
        <span data-text={todo.text}>{todo.text}</span>
    </label>
    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
}