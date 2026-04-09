import { useFilterContext } from "../../../context/final-exercise-contexts/KanbanBoardFilterContext";
import "./KanbanBoard.css"

export default function FilterPanel() {
  const { filters, setFilters } = useFilterContext();

  return (
    <div className="row">
      <select
        value={filters.priorityFilter}
        onChange={(e) =>
          setFilters({ ...filters, priorityFilter: e.target.value })
        }
      >
        <option value="all">All</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button
        className="button btn-muted"
        onClick={() =>
          setFilters({ searchQuery: "", priorityFilter: "all" })
        }
      >
        Clear
      </button>
    </div>
  );
};