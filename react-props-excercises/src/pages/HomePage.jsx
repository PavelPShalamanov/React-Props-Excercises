import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const pages = [
    { path: "/student-card-demo-page", title: "Student Cards" },
    { path: "/status-indicator-demo-page", title: "Status Indicators" },
    { path: "/accordion-demo-page", title: "Accordions" },
    { path: "/filterable-student-list-demo-page", title: "Filterable Student List" },
    { path: "/tabs-demo-page", title: "Tabs" },
    { path: "/classroom-demo-page", title: "Classroom" },
    { path: "/quiz-builder-demo-page", title: "Quiz Builder" },
  ];

  return (
    <div className="main-grid">
      {pages.map((page) => (
        <Link key={page.path} to={page.path} className="exercise-card">
          {page.title}
        </Link>
      ))}
    </div>
  );
}

export default HomePage;