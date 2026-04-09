import { createContext, useContext, useReducer } from "react";

// -------------------- TASK CONTEXT --------------------
const TaskContext = createContext();

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: state.nextId,
            title: action.payload.title,
            priority: action.payload.priority,
            status: "todo",
          },
        ],
        nextId: state.nextId + 1,
      };

    case "MOVE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, status: action.payload.status }
            : task
        ),
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, {
    tasks: [],
    nextId: 1,
  });

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTaskContext must be used within TaskProvider");
  return context;
};