import { useTodoStore } from "../../../store/state-mamangement-exercise-stores/todoStore";

export default function Stats() {
  const total = useTodoStore((s) => s.todos.length);
  const done = useTodoStore((s) => s.todos.filter((t) => t.done).length);
  const remaining = total - done;
  const percentage = total ? Math.round((done / total) * 100) : 0;

  return (
    <div className="stats mt-4">
      <p className="text-sm mb-1">
        {done} out of {total} completed ({percentage}%)
      </p>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}