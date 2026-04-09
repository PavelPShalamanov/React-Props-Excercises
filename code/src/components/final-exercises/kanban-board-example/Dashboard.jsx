import { useTaskContext } from "../../../context/final-exercise-contexts/KanbanBoardTaskContext";
import "./KanbanBoard.css"

export default function Dashboard() {
  const {
    state: { tasks },
  } = useTaskContext();

  const todo = tasks.filter((t) => t.status === "todo").length;
  const inProgress = tasks.filter((t) => t.status === "in-progress").length;
  const done = tasks.filter((t) => t.status === "done").length;
  const high = tasks.filter((t) => t.priority === "high").length;

  const completion = tasks.length
    ? Math.round((done / tasks.length) * 100)
    : 0;

  return (
    <div className="dashboard">
      <div>Todo: {todo}</div>
      <div>In Progress: {inProgress}</div>
      <div>
        Done: {done} | High: {high}
        <div>
          <div>{completion}%</div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${completion}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};