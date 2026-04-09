import { useContext, useEffect, useState } from "react";
import { ClassroomContext } from "../../../context/final-exercise-contexts/ClassroomContext";
import "./Classroom.css";

export default function StudentTable() {
  const { state } = useContext(ClassroomContext);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{ setTimeout(()=>setLoading(false),2000); },[]);

  const getAvg=g=>{ const all=Object.values(g).flat(); return all.length?all.reduce((a,b)=>a+b,0)/all.length:0 };

  const formatGrades = (arr) => {
    const chunkSize = 5;
    const chunks = [];
    for(let i=0;i<arr.length;i+=chunkSize){
      chunks.push(arr.slice(i,i+chunkSize));
    }
    return chunks.map((c,i)=>(<div key={i}>{c.join(", ")}</div>));
  };

  const data=state.students
    .filter(s=>s.name.toLowerCase().includes(state.filter.toLowerCase()))
    .filter(s=>state.classFilter==="All"||s.class===state.classFilter)
    .sort((a,b)=> state.sort==="asc" ? getAvg(a.grades)-getAvg(b.grades) : getAvg(b.grades)-getAvg(a.grades));

  return (
    <div className="table-container">
      {loading ? <div className="loading">Loading...</div> : (
        <table className="table">
          <thead><tr><th>Name</th><th>Class</th><th>Math</th><th>IT</th><th>Avg</th></tr></thead>
          <tbody>
            {data.map(s=>{
              const avg=getAvg(s.grades);
              return (
                <tr key={s.id} className={avg>=5.5?"good":avg<3?"bad":""}>
                  <td>{s.name}</td><td>{s.class}</td>
                  <td>{formatGrades(s.grades.Math)}</td>
                  <td>{formatGrades(s.grades.IT)}</td>
                  <td>{avg.toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}