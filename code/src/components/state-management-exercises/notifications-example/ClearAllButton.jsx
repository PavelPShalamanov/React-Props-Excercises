import { useNotifications } from "../../../context/NotificationContext";

export default function ClearAllButton() {
  const { clearAll } = useNotifications();

  return (
    <button onClick={clearAll} style={{ marginTop: "10px" }}>
      Clear All
    </button>
  );
}