import "./ComponentCatalog.css";

export default function SortControls({ sortBy, onSortChange }) {
  return (
    <div className="sort">
      <button
        className={sortBy === "rating" ? "active" : ""}
        onClick={() => onSortChange("rating")}
      >
        Sort by Rating
      </button>
      <button
        className={sortBy === "students" ? "active" : ""}
        onClick={() => onSortChange("students")}
      >
        Sort by Students
      </button>
    </div>
  );
}