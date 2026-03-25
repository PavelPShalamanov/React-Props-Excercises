import { Link } from "react-router-dom";
import { categories } from "../data/categories";
import "./HomePage.css";

function HomePage() {

  return (
    <div>
      {categories.map((category) => (
        <div key={category.title} className="category-section">
          <h2>{category.title}</h2>
          <hr />

          <div className="main-grid">
            {category.pages.length > 0 ? (
              category.pages.map((page) => (
                <Link
                  key={page.path}
                  to={page.path}
                  className="exercise-card"
                >
                  {page.title}
                </Link>
              ))
            ) : (
              <p className="empty-text">Coming soon...</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomePage;