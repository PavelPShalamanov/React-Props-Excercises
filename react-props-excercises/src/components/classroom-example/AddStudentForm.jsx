import { useState } from "react";
import "./AddStudentForm.css";

function AddStudentForm({ onAdd }) {
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !grade) return;
    onAdd(name, grade);
    setName("");
    setGrade("");
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        placeholder="Student name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        placeholder="Grade"
        value={grade}
        onChange={e => setGrade(e.target.value)}
      />
      <button type="submit">Add Student</button>
    </form>
  );
}

export default AddStudentForm;