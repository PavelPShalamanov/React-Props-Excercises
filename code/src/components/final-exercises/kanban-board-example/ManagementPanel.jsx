import SearchBar from "./SearchBar";
import FilterPanel from "./FilterPanel";
import TaskForm from "./TaskForm";
import "./KanbanBoard.css"

export default function ManagementPanel() {
    return (
    <div className="panel">
        <div className="panel">
            <p>Search options</p>
            <SearchBar />
            <FilterPanel />
        </div>
        <p>Add task</p>
        <TaskForm />
    </div>
    );
}