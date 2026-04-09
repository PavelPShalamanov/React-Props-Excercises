import { useState } from "react";
import { useTaskContext } from "../../../context/final-exercise-contexts/KanbanBoardTaskContext";

export default function TaskForm(){
  const { dispatch } = useTaskContext();
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("low");

  const handleAdd = () => {
    if (!title.trim()) return;
    dispatch({ type: "ADD_TASK", payload: { title, priority } });
    setTitle("");
  };

  return (
    <div className="panel">
      <input
        className="input"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="row">
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button
          onClick={handleAdd}
          className="button btn-primary"
        >
          Add
        </button>
      </div>
    </div>
  );
};