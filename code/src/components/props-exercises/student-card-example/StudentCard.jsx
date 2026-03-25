import "./StudentCard.css";

function StudentCard({ name, grade, averageScore }) {
  // Get initials
  const initials = name
    .split(" ")
    .map(n => n[0])
    .join("");

  return (
    <div className="student-card">
      <div className="student-initials">{initials}</div>
      <div>
        <div className="student-name">{name}</div>
        <div className="student-info">
          Grade: {grade} | Average score: {averageScore}
        </div>
      </div>
    </div>
  );
}

export default StudentCard;