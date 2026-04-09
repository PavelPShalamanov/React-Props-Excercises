import { useContext } from "react";
import { ClassroomContext } from "../../../context/final-exercise-contexts/ClassroomContext";
import "./Classroom.css";

export default function SearchBar() {
  const { dispatch } = useContext(ClassroomContext);

  return (
    <input
      className="input"
      placeholder="Search student..."
      onChange={e => dispatch({ type: "SET_FILTER", payload: e.target.value })}
    />
  );
}