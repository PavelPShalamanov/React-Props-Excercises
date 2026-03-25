import "./StatusBadge.css";

function StatusBadge({ status, label }) {
  // Determine color class based on status
  let statusClass = "";
  let displayText = status;

  if (status === "online") {
    statusClass = "status-online";
    displayText = "Online";
  } else if (status === "away") {
    statusClass = "status-away";
    displayText = "Away";
  } else {
    statusClass = "status-offline";
    displayText = "Offline";
  }

  return (
    <div className="status-badge">
      <span className={`status-dot ${statusClass}`}></span>
      <span className="status-text">
        {label ? `${label} - ${displayText}` : displayText}
      </span>
    </div>
  );
}

export default StatusBadge;