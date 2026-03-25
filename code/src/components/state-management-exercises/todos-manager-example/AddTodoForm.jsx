import { useState } from "react";
import { useTodoStore } from "../../../store/todoStore";

export default function AddTodoForm() {
  const [text, setText] = useState("");
  const addTodo = useTodoStore((s) => s.addTodo);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new todo..."
        className="add-todo-input"
        />
      <button type="submit" className="add-todo-button">Add</button>
    </form>
  );
}