import CourseCard from "./CourseCard";
import "./ComponentCatalog.css";

export default function CourseList({ courses }) {
  if (!courses.length) return <p>No courses found</p>;

  return (
    <div className="list">
      {courses.map((c) => (
        <CourseCard key={c.id} course={c} />
      ))}
    </div>
  );
}