import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { categories } from "../data/categories";
import "./Layout.css";

function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <div>
      {/* Top Bar */}
      <div className="top-bar">
        <button className="burger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
        <Link to="/" className="logo">
          React Exercises Hub
        </Link>
      </div>

      {/* Sidebar */}
      {isOpen && (
        <nav className="sidebar">
          <Link
            to="/"
            className="sidebar-button"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          {categories.map((category) => (
            <div key={category.key}>
              <div
                className="sidebar-category"
                onClick={() => toggleCategory(category.key)}
              >
                {category.title}
              </div>

              {openCategory === category.key &&
                category.pages.map((page) => (
                  <Link
                    key={page.path}
                    to={page.path}
                    className="sidebar-sub-button"
                    onClick={() => setIsOpen(false)}
                  >
                    {page.title}
                  </Link>
                ))}
            </div>
          ))}
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