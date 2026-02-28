import { useState } from "react";
import SearchInput from "./SearchInput";
import StudentItem from "./StudentItem";
import "./FilterableStudentList.css";

function FilterableStudentList() {
  const [query, setQuery] = useState("");

  const students = [
    { id: 1, name: "Ivan Petrov", grade: "11 A" },
    { id: 2, name: "Maria Ivanova", grade: "11 B" },
    { id: 3, name: "Georgi Georgiev", grade: "10 A" },
    { id: 4, name: "Petar Dimitrov", grade: "12 V" },
  ];

  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="student-list-container">
      <h2>Student Directory</h2>

      <SearchInput value={query} onChange={setQuery} />

      <div className="student-list">
        {filtered.length === 0 ? (
          <p className="no-results">No students founder under "{query}"</p>
        ) : (
          filtered.map((s) => (
            <StudentItem key={s.id} student={s} />
          ))
        )}
      </div>
    </div>
  );
}

export default FilterableStudentList;