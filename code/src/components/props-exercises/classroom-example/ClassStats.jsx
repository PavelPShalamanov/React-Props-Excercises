import StudentCard from "../student-card-example/StudentCard";
import "./ClassStats.css";

function ClassStats({ students }) {
  if (!students.length) return null;

  const average = (marks) =>
    marks.length
      ? marks.reduce((a, b) => a + b, 0) / marks.length
      : 0;

  const sorted = [...students].sort(
    (a, b) => average(b.marks) - average(a.marks)
  );

  const best = sorted[0];
  const worst = sorted[sorted.length - 1];

  return (
    <div className="stats">
      <h3>Statistics</h3>
      <p>Number of students: {students.length}</p>

      <div className="stats-cards">
        <div className="best">
          <h4>Best Student</h4>
          <StudentCard
            name={best.name}
            grade={best.grade}
            averageScore={average(best.marks).toFixed(2)}
          />
        </div>

        <div className="worst">
          <h4>Worst Student</h4>
          <StudentCard
            name={worst.name}
            grade={worst.grade}
            averageScore={average(worst.marks).toFixed(2)}
          />
        </div>
      </div>
    </div>
  );
}

export default ClassStats;