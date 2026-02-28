import StudentCard from "../components/student-card-example/StudentCard";

function StudentCardDemoPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Cards</h2>

      <StudentCard
        name="Ivan Petrov"
        grade="11 B"
        averageScore={5.67}
      />

      <StudentCard
        name="Maria Ivanova"
        grade="11 A"
        averageScore={5.92}
      />
    </div>
  );
}

export default StudentCardDemoPage;