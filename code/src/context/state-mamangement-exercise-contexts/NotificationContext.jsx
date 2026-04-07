import { createContext, useContext, useReducer } from "react";

function notificationReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          type: action.notifType,
          message: action.message
        }
      ];

    case "REMOVE":
      return state.filter((n) => n.id !== action.id);

    case "CLEAR_ALL":
      return [];

    default:
      return state;
  }
}

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [notifications, dispatch] = useReducer(notificationReducer, []);

  const addNotification = (type, message) => {
    const id = Date.now();

    dispatch({
      type: "ADD",
      id,
      notifType: type,
      message
    });

    setTimeout(() => {
      dispatch({ type: "REMOVE", id });
    }, 5000);
  };

  const removeNotification = (id) => {
    dispatch({ type: "REMOVE", id });
  };

  const clearAll = () => {
    dispatch({ type: "CLEAR_ALL" });
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, removeNotification, clearAll }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  const ctx = useContext(NotificationContext);

  if (!ctx) {
    throw new Error("useNotifications must be used inside NotificationProvider");
  }

  return ctx;
}