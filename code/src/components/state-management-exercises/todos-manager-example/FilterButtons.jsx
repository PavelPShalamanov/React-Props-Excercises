import { useTodoStore } from "../../../store/todoStore";

export default function FilterButtons() {
  const filter = useTodoStore((s) => s.filter);
  const setFilter = useTodoStore((s) => s.setFilter);

  const filters = ["all", "active", "completed"];

  return (
    <div className="filter-buttons">
      {filters.map((f) => (
          <button
          key={f}
          onClick={() => setFilter(f)}
          className={filter === f ? "active" : ""}
          >
          {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
      ))}
    </div>
  );
}