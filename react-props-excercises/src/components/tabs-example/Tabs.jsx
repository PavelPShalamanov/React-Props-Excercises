import { useState, Children } from "react";
import "./Tabs.css";

function Tabs({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabsArray = Children.toArray(children);

  return (
    <div className="tabs">
      {/* Navigation */}
      <div className="tabs-nav">
        {tabsArray.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            {tab.props.label}
          </button>
        ))}
      </div>

      {/* Active Content */}
      <div className="tabs-content">
        {tabsArray[activeIndex]}
      </div>
    </div>
  );
}

export default Tabs;