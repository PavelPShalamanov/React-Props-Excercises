import { useTaskContext } from "../../../context/final-exercise-contexts/KanbanBoardTaskContext";
import { useFilterContext } from "../../../context/final-exercise-contexts/KanbanBoardFilterContext";
import TaskCard from "./TaskCard";
import "./KanbanBoard.css"

export default function KanbanColumn({ status, title }) {
  const {
    state: { tasks },
  } = useTaskContext();
  const { filters } = useFilterContext();

  const filtered = tasks.filter((task) => {
    return (
      task.status === status &&
      task.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) &&
      (filters.priorityFilter === "all" ||
        task.priority === filters.priorityFilter)
    );
  });

  return (
    <div className="column">
      <h2 className="font-bold">{title}</h2>
      <div>
        {filtered.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};