import { useNotifications } from "../../../context/state-mamangement-exercise-contexts/NotificationContext";

export default function NotificationCount() {
  const { notifications } = useNotifications();

  return (
    <div style={{ fontWeight: "bold" }}>
      Notifications: {notifications.length}
    </div>
  );
}