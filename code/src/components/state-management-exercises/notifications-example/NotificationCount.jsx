import { useNotifications } from "../../../context/NotificationContext";

export default function NotificationCount() {
  const { notifications } = useNotifications();

  return (
    <div style={{ fontWeight: "bold" }}>
      Notifications: {notifications.length}
    </div>
  );
}