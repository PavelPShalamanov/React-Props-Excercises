import "./ConfirmModal.css";

function ConfirmModal({ message, onConfirm, onCancel }) {
  return (
    <div className="confirm-overlay">
      <div className="confirm-modal">
        <button className="confirm-close" onClick={onCancel}>
          X
        </button>
        <p className="confirm-message">{message}</p>
        <div className="confirm-actions">
          <button className="confirm-btn confirm-ok" onClick={onConfirm}>
            Confirm
          </button>
          <button className="confirm-btn confirm-cancel" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;