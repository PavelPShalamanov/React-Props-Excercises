export default function StatsBar({ courses, children }) {
  const total = courses.length;
  const totalStudents = courses.reduce((sum, c) => sum + c.students, 0);
  const avgRating = total
    ? courses.reduce((sum, c) => sum + c.rating, 0) / total
    : 0;

  return children({ total, totalStudents, avgRating });
}