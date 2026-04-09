import React, { useContext } from "react";
import { ClassroomContext } from "../../../context/final-exercise-contexts/ClassroomContext";
import StudentForm from "./StudentForm";
import GradeForm from "./GradeForm";
import StudentTable from "./StudentTable";
import StatsDashboard from "./StatsDashboard";
import TableManagement from "./TableManagement";
import "./Classroom.css";

export default function Classroom() {
  const { state, dispatch } = useContext(ClassroomContext);

  return (
    <div className={state.darkMode ? "app dark" : "app"}>
      <button className="toggle button btn-primary" onClick={() => dispatch({ type: "TOGGLE_DARK" })}>
        Toggle Dark Mode
      </button>

      <div className="classroom-main-grid">
        <div className="left">
          <StudentForm />
          <GradeForm />
          <TableManagement />
        </div>

        <div className="middle">
          <StudentTable />
        </div>

        <div className="right">
          <StatsDashboard />
        </div>
      </div>
    </div>
  );
}