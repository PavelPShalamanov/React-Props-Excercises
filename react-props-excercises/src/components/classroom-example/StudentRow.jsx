import StudentCard from "../student-card-example/StudentCard";
import "./StudentRow.css";

function StudentRow({ student, onMark, onDelete }) {
  return (
    <div className="student-row">
      <StudentCard
        name={student.name}
        grade={student.grade}
        averageScore={
          student.marks.length
            ? (
                student.marks.reduce((a, b) => a + b, 0) /
                student.marks.length
              ).toFixed(2)
            : "-"
        }
      />

      <div className="student-actions">
        <button onClick={() => onMark(student.id)}>
          Place mark
        </button>
        <button onClick={() => onDelete(student.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default StudentRow;