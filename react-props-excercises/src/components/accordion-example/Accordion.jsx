import { useState, Children, cloneElement } from "react";
import "./Accordion.css";

function Accordion({ children }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="accordion">
      {Children.map(children, (child, index) =>
        cloneElement(child, {
          isOpen: index === openIndex,
          onToggle: () =>
            setOpenIndex(index === openIndex ? null : index),
        })
      )}
    </div>
  );
}

export default Accordion;