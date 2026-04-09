import "./ComponentCatalog.css";

export default function FilterPanel({ category, level, onCategoryChange, onLevelChange, onClear }) {
  return (
    <div className="filters">
      <select value={category} onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="DevOps">DevOps</option>
      </select>

      <select value={level} onChange={(e) => onLevelChange(e.target.value)}>
        <option value="">All Levels</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>

      <button onClick={onClear}>Clear</button>
    </div>
  );
}