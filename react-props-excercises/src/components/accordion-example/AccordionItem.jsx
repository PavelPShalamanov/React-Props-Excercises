function AccordionItem({ title, children, isOpen, onToggle }) {
  return (
    <div className="accordion-item">
      <button className="accordion-title" onClick={onToggle}>
        {title}
      </button>

      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
        <div className="accordion-inner">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;