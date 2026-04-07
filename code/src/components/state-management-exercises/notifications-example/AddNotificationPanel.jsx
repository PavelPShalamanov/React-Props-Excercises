import { useNotifications } from "../../../context/state-mamangement-exercise-contexts/NotificationContext";

export default function AddNotificationPanel() {
  const { addNotification } = useNotifications();

  return (
    <div style={{ marginTop: "10px" }}>
      <button onClick={() => addNotification("success", "The operation was successful!")}>
        Success
      </button>

      <button onClick={() => addNotification("error", "Something went wrong!")}>
        Error
      </button>

      <button onClick={() => addNotification("warning", "Be careful!")}>
        Warning
      </button>
    </div>
  );
}