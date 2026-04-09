import { useFilterContext } from "../../../context/final-exercise-contexts/KanbanBoardFilterContext";
import "./KanbanBoard.css"

export default function SearchBar() {
  const { filters, setFilters } = useFilterContext();

  return (
    <input
      className="input"
      placeholder="Search..."
      value={filters.searchQuery}
      onChange={(e) =>
        setFilters({ ...filters, searchQuery: e.target.value })
      }
    />
  );
};