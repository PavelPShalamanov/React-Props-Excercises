import { useContext } from "react";
import { ClassroomContext } from "../../../context/final-exercise-contexts/ClassroomContext";
import "./Classroom.css";

export default function StatsDashboard() {
  const { state } = useContext(ClassroomContext);

  const classA=state.students.filter(s=>s.class==="11A");
  const classB=state.students.filter(s=>s.class==="11B");

  const getAvg = grades => {
    const all = Object.values(grades).flat();
    return all.length ? all.reduce((a,b)=>a+b,0)/all.length : 0;
  };

  const avgA=classA.reduce((a,s)=>a+getAvg(s.grades),0)/classA.length;
  const avgB=classB.reduce((a,s)=>a+getAvg(s.grades),0)/classB.length;

  const avgs = state.students.map(s => getAvg(s.grades));
  const overall = avgs.reduce((a,b)=>a+b,0)/avgs.length;
  const best = state.students.reduce((a,b)=> getAvg(a.grades)>getAvg(b.grades)?a:b);

  const excellent = avgs.filter(a=>a>=5.5).length;

  return (
    <div className="stats">
      <p>Average: {overall.toFixed(2)}</p>
      <p>Best: {best.name}</p>
      <p>Excellent students: {excellent}</p>
      <p>11A Avg: {avgA.toFixed(2)}</p>
      <p>11B Avg: {avgB.toFixed(2)}</p>
      <p>Better class: {avgA>avgB?"11A":"11B"}</p>
    </div>
  );
}