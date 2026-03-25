import { NotificationProvider } from "../../context/NotificationContext";
import NotificationCount from "../../components/state-management-exercises/notifications-example/NotificationCount";
import AddNotificationPanel from "../../components/state-management-exercises/notifications-example/AddNotificationPanel";
import NotificationList from "../../components/state-management-exercises/notifications-example/NotificationList";
import ClearAllButton from "../../components/state-management-exercises/notifications-example/ClearAllButton";

export default function NotificationDemoPage() {
  return (
    <NotificationProvider>
      <div style={{ padding: "20px" }}>
        <h1>Notification System (useReducer + Context)</h1>

        <NotificationCount />
        <AddNotificationPanel />
        <NotificationList />
        <ClearAllButton />
      </div>
    </NotificationProvider>
  );
}