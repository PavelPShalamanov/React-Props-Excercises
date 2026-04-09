import { useTaskContext } from "../../../context/final-exercise-contexts/KanbanBoardTaskContext";

export default function TaskCard({ task }) {
  const { dispatch } = useTaskContext();

  const statusFlow = {
    "todo": "in-progress",
    "in-progress": "done",
  };

  const nextStatus = statusFlow[task.status];

  return (
    <div className="card">
      <div className="card-info">
        <h3>{task.title}</h3>
        <span className={`badge-${task.priority}`}>
          {task.priority}
        </span>
      </div>
      <div>
        {nextStatus && (
          <button
            className="button btn-primary"
            onClick={() =>
              dispatch({
                type: "MOVE_TASK",
                payload: { id: task.id, status: nextStatus },
              })
            }
          >
            Forward
          </button>
        )}
        <button
          className="button btn-danger"
          onClick={() =>
            dispatch({ type: "DELETE_TASK", payload: { id: task.id } })
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
};