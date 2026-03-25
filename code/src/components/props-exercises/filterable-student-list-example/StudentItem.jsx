import StudentCard from "../student-card-example/StudentCard";

function StudentItem({ student }) {
  return (
    <StudentCard
      name={student.name}
      grade={student.grade}
      averageScore="—"
    />
  );
}

export default StudentItem;