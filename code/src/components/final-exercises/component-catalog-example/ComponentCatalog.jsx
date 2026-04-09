// App.jsx
import { useState, useMemo } from "react";
import SearchBar from "./SearchBar";
import FilterPanel from "./FilterPanel";
import SortControls from "./SortControls";
import CourseList from "./CourseList";
import StatsBar from "./StatsBar";
import "./ComponentCatalog.css";

const coursesData = [
  { id: 1, title: "React Basics", category: "Frontend", level: "Beginner", rating: 4, students: 1200 },
  { id: 2, title: "Advanced React", category: "Frontend", level: "Advanced", rating: 5, students: 800 },
  { id: 3, title: "Node.js API", category: "Backend", level: "Intermediate", rating: 4, students: 950 },
  { id: 4, title: "Docker Essentials", category: "DevOps", level: "Beginner", rating: 3, students: 600 },
  { id: 5, title: "Kubernetes Pro", category: "DevOps", level: "Advanced", rating: 5, students: 400 },
  { id: 6, title: "Express Fundamentals", category: "Backend", level: "Beginner", rating: 4, students: 1100 },
  { id: 7, title: "CSS Mastery", category: "Frontend", level: "Intermediate", rating: 4, students: 700 },
  { id: 8, title: "System Design", category: "Backend", level: "Advanced", rating: 5, students: 500 },
];

export default function ComponentCatalog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [sortBy, setSortBy] = useState("rating");

  const filteredCourses = useMemo(() => {
    return coursesData
      .filter((c) => c.title.toLowerCase().includes(search.toLowerCase()))
      .filter((c) => (category ? c.category === category : true))
      .filter((c) => (level ? c.level === level : true))
      .sort((a, b) => b[sortBy] - a[sortBy]);
  }, [search, category, level, sortBy]);

  return (
    <div className="container">
      <h1>Course Catalog</h1>

      <SearchBar value={search} onChange={setSearch} />
      <FilterPanel
        category={category}
        level={level}
        onCategoryChange={setCategory}
        onLevelChange={setLevel}
        onClear={() => {
          setCategory("");
          setLevel("");
        }}
      />
      <SortControls sortBy={sortBy} onSortChange={setSortBy} />

      <StatsBar courses={filteredCourses}>
        {(stats) => (
          <div className="stats">
            <span>Total: {stats.total}</span>
            <span>Avg Rating: {stats.avgRating.toFixed(1)}</span>
            <span>Students: {stats.totalStudents}</span>
          </div>
        )}
      </StatsBar>

      <CourseList courses={filteredCourses} />
    </div>
  );
}




