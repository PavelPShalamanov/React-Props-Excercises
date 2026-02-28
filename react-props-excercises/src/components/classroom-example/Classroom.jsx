import { useState } from "react";
import AddStudentForm from "./AddStudentForm";
import StudentRow from "./StudentRow";
import MarkModal from "./MarkModal";
import ClassStats from "./ClassStats";
import ConfirmModal from "./ConfirmModal";
import Toast from "./Toast";
import "./Classroom.css";

function Classroom() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [toast, setToast] = useState(null);
  const [sortAsc, setSortAsc] = useState(true);

  const addStudent = (name, grade) => {
    const newStudent = {
      id: Date.now(),
      name,
      grade,
      marks: [],
    };
    setStudents(prev => [...prev, newStudent]);
    showToast("Student added!");
  };

  const addMark = (id, mark) => {
    setStudents(prev =>
      prev.map(s =>
        s.id === id ? { ...s, marks: [...s.marks, mark] } : s
      )
    );
    showToast("Mark added!");
  };

  const requestDeleteStudent = (id) => {
  setConfirmDelete({
      id,
      message: "Are you sure you want to delete this student?"
    });
  };

  const handleConfirmDelete = () => {
    setStudents(prev => prev.filter(s => s.id !== confirmDelete.id));
    showToast("Student deleted!");
    setConfirmDelete(null);
  };

  const handleCancelDelete = () => {
    setConfirmDelete(null);
  };

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 2500);
  };

  const sortedStudents = [...students].sort((a, b) => {
    const avgA = average(a.marks);
    const avgB = average(b.marks);
    return sortAsc ? avgA - avgB : avgB - avgA;
  });

  function average(marks) {
    if (!marks.length) return 0;
    return marks.reduce((a, b) => a + b, 0) / marks.length;
  }

  return (
    <div className="classroom">
      <h2>Classroom App</h2>

      <AddStudentForm onAdd={addStudent} />

      <button
        className="sort-button"
        onClick={() => setSortAsc(prev => !prev)}
      >
        Sort by average ({sortAsc ? "Asc" : "Desc"})
      </button>

      {sortedStudents.map(s => (
        <StudentRow
          key={s.id}
          student={s}
          onMark={(id) => setSelectedStudent(id)}
          onDelete={() => requestDeleteStudent(s.id)}
        />
      ))}

      <ClassStats students={students} />

      {selectedStudent && (
        <MarkModal
          onClose={() => setSelectedStudent(null)}
          onSubmit={(mark) => {
            addMark(selectedStudent, mark);
            setSelectedStudent(null);
          }}
        />
      )}

      {confirmDelete && (
        <ConfirmModal
          message={confirmDelete.message}
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}

      {toast && <Toast message={toast} />}
    </div>
  );
}

export default Classroom;