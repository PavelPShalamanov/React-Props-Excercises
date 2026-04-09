import { TaskProvider } from "../../../context/final-exercise-contexts/KanbanBoardTaskContext";
import { FilterProvider } from "../../../context/final-exercise-contexts/KanbanBoardFilterContext";
import Dashboard from "./Dashboard";
import ManagementPanel from "./ManagementPanel";
import KanbanColumn from "./KanbanColumn";
import "./KanbanBoard.css"

export default function KanbanBoard() {
    return (
    <TaskProvider>
      <FilterProvider>
        <div className="app-container">
          <Dashboard />
          <ManagementPanel />
          <div className="row">
            <KanbanColumn status="todo" title="Todo" />
            <KanbanColumn status="in-progress" title="In Progress" />
            <KanbanColumn status="done" title="Done" />
          </div>
        </div>
      </FilterProvider>
    </TaskProvider>
  );
}