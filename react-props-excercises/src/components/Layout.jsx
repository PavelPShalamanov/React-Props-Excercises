import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Layout.css";

function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Top Bar */}
      <div className="top-bar">
        <button className="burger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
        <Link to="/" style={{marginLeft:"5px", padding:"5px", fontSize:"24px", color:"white", textDecoration:"none"}}>React Props Excercises</Link>
      </div>

      {/* Sidebar */}
      {isOpen && (
        <nav className="sidebar">
          <Link to="/" className="sidebar-button" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/student-card-demo-page" className="sidebar-button" onClick={() => setIsOpen(false)}>Student Cards</Link>
          <Link to="/status-indicator-demo-page" className="sidebar-button" onClick={() => setIsOpen(false)}>Status Indicators</Link>
          <Link to="/accordion-demo-page" className="sidebar-button" onClick={() => setIsOpen(false)}>Accordions</Link>
          <Link to="/filterable-student-list-demo-page" className="sidebar-button" onClick={() => setIsOpen(false)}>Filterable List</Link>
          <Link to="/tabs-demo-page" className="sidebar-button" onClick={() => setIsOpen(false)}>Tabs</Link>
          <Link to="/classroom-demo-page" className="sidebar-button" onClick={() => setIsOpen(false)}>Classroom</Link>
          <Link to="/quiz-builder-demo-page" className="sidebar-button" onClick={() => setIsOpen(false)}>Quiz Builder</Link>
        </nav>
      )}

      {/* Page Content */}
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;