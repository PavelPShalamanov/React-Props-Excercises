import { useState } from "react";
import "./MarkModal.css";

function MarkModal({ onClose, onSubmit }) {
  const [mark, setMark] = useState("");

  const handleSubmit = () => {
    if (!mark) return;
    onSubmit(Number(mark));
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Add Mark</h3>
        <input
          type="number"
          min="2"
          max="6"
          value={mark}
          onChange={e => setMark(e.target.value)}
        />
        <div className="modal-actions">
          <button onClick={handleSubmit}>Add</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default MarkModal;