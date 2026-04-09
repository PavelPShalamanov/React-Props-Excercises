import { useContext, useState, useEffect } from "react";
import { ClassroomContext } from "../../../context/final-exercise-contexts/ClassroomContext";
import "./Classroom.css";

export default function GradeForm() {
  const { state, dispatch } = useContext(ClassroomContext);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState(null);

  useEffect(()=>{
    if(selectedStudent && !state.students.find(s=>s.id===selectedStudent)){
      setSelectedStudent(null);
      setSubject("");
      setGrade(null);
    }
  },[state.students]);

  const gradeColors = {
    2: "#ff0000",
    3: "#ff9100",
    4: "#ffdc19",
    5: "#87ff37",
    6: "#00911f"
  };

  return (
    <div className="panel">
      <h2>Grading panel</h2>
      <select className="dropdown" onChange={e=>setSelectedStudent(Number(e.target.value))}>
        <option>Select student</option>
        {state.students.map(s=><option key={s.id} value={s.id}>{s.name}</option>)}
      </select>

      {selectedStudent && (
        <select className="dropdown" onChange={e=>{ setSubject(e.target.value); setGrade(null); }}>
          <option value="">Select subject</option>
          <option value="Math">Math</option>
          <option value="IT">IT</option>
        </select>
      )}

      {selectedStudent && subject && (
        <div className="grades">
          {[2,3,4,5,6].map(g=> (
            <button
              key={g}
              style={{background:gradeColors[g]}}
              className={`button ${grade===g?"selected":""}`}
              onClick={()=>setGrade(grade===g?null:g)}
            >
              {g}
            </button>
          ))}
        </div>
      )}

      <button
        className={`button ${(!grade || !subject)?"btn-muted":"btn-primary"}`}
        disabled={!grade || !subject}
        onClick={()=>{
          dispatch({ type:"ADD_GRADE", payload:{ id:selectedStudent, subject, grade }});
          setGrade(null);
        }}
      >
        Add grade
      </button>
    </div>
  );
}