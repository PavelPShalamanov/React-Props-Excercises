import { useContext } from "react";
import { ClassroomContext } from "../../../context/final-exercise-contexts/ClassroomContext";

export default function TableManagement(){
  const { dispatch } = useContext(ClassroomContext);

  return (
    <div className="panel">
      <h2>Table management</h2>
      <input className="input" placeholder="Search..." onChange={e=>dispatch({type:"SET_FILTER", payload:e.target.value})} />
      <button className="button btn-primary" onClick={()=>dispatch({type:"SET_FILTER", payload:""})}>Clear</button>

      <select className="dropdown" onChange={e=>dispatch({type:"SET_CLASS_FILTER", payload:e.target.value})}>
        <option value="All">All</option>
        <option value="11A">11A</option>
        <option value="11B">11B</option>
      </select>

      <select className="dropdown" onChange={e=>dispatch({type:"SET_SORT", payload:e.target.value})}>
        <option value="desc">DESC</option>
        <option value="asc">ASC</option>
      </select>
    </div>
  );
}