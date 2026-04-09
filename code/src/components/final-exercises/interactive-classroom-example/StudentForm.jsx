import { useState, useContext } from "react";
import { ClassroomContext } from "../../../context/final-exercise-contexts/ClassroomContext";
import "./Classroom.css";

export default function StudentForm() {
  const { state, dispatch } = useContext(ClassroomContext);
  const [tab, setTab] = useState("adding");
  const [name, setName] = useState("");
  const [className, setClassName] = useState("11A");
  const [error, setError] = useState(false);
  const [selected, setSelected] = useState("");

  const toggleTab = (t) => setTab(prev => prev === t ? (t === "adding" ? "deleting" : "adding") : t);

  return (
    <div className="panel">
      <h2>Student management panel</h2>
      <div className="tabs">
        <button className={tab==="adding"?"button btn-primary active":"button btn-primary"} onClick={()=>toggleTab("adding")}>Adding</button>
        <button className={tab==="deleting"?"button btn-primary active":"button btn-primary"} onClick={()=>toggleTab("deleting")}>Deleting</button>
      </div>

      {tab === "adding" && (
        <>
          {error && <p className="error">Name is required</p>}
          <input className={error?"input error-border":"input"} placeholder="Enter student name..." value={name} onChange={e=>setName(e.target.value)} />
          <div className="row">
            <select className="dropdown" onChange={e=>setClassName(e.target.value)}>
              <option>11A</option>
              <option>11B</option>
            </select>
            <button className="button btn-primary" onClick={()=>{
              if(!name.trim()){ setError(true); return; }
              dispatch({ type:"ADD_STUDENT", payload:{ name, className }});
              setName(""); setError(false);
            }}>Add student</button>
          </div>
        </>
      )}

      {tab === "deleting" && (
        <>
          <select onChange={e=>setSelected(Number(e.target.value))}>
            <option>Select student</option>
            {state.students.map(s=><option key={s.id} value={s.id}>{s.name}</option>)}
          </select>
          <button className="button btn-danger" onClick={()=>dispatch({ type:"REMOVE_STUDENT", payload:selected })}>Delete student</button>
        </>
      )}
    </div>
  );
}