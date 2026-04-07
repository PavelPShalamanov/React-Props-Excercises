import { useNotifications } from "../../../context/state-mamangement-exercise-contexts/NotificationContext";

export default function NotificationList() {
  const { notifications, removeNotification } = useNotifications();

  const getStyle = (type) => {
    switch (type) {
      case "success":
        return { background: "#4caf50", color: "white" };
      case "error":
        return { background: "#f44336", color: "white" };
      case "warning":
        return { background: "#ff9800", color: "black" };
      default:
        return {};
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      {notifications.map((n) => (
        <div
          key={n.id}
          style={{
            ...getStyle(n.type),
            padding: "10px",
            margin: "5px 0",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <span>{n.message}</span>
          <button onClick={() => removeNotification(n.id)}>X</button>
        </div>
      ))}
    </div>
  );
}