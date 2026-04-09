import { createContext, useReducer, useEffect } from "react";

export const ClassroomContext = createContext();

const initialData = JSON.parse(localStorage.getItem("students")) || {
  students: [
    { id: 1, name: "Ivan Ivanov", class: "11A", grades: { Math: [5,6,4], IT: [6,5] } },
    { id: 2, name: "Maria Petrova", class: "11B", grades: { Math: [6,6], IT: [5,6] } },
    { id: 3, name: "Georgi Georgiev", class: "11A", grades: { Math: [3,4], IT: [4,3] } },
    { id: 4, name: "Elena Dimitrova", class: "11B", grades: { Math: [5,5], IT: [6,6] } },
    { id: 5, name: "Petar Petrov", class: "11A", grades: { Math: [2,3], IT: [3,2] } },
    { id: 6, name: "Nikolay Nikolov", class: "11B", grades: { Math: [4,5], IT: [5,4] } },
    { id: 7, name: "Stoyan Stoyanov", class: "11A", grades: { Math: [6,6], IT: [6,6] } },
    { id: 8, name: "Viktoria Ivanova", class: "11B", grades: { Math: [5,4], IT: [4,5] } },
    { id: 9, name: "Dimitar Dimitrov", class: "11A", grades: { Math: [3,3], IT: [2,3] } },
    { id: 10, name: "Kristina Georgieva", class: "11B", grades: { Math: [6,5], IT: [5,6] } }
  ],
  nextId: 11,
  filter: "",
  classFilter: "All",
  darkMode: false
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_STUDENT":
        return {
            ...state,
            students: [...state.students, { id: state.nextId, name: action.payload.name, class: action.payload.className, grades: { Math: [], IT: [] } }],
            nextId: state.nextId + 1
        };
    case "ADD_GRADE":
        return {
            ...state,
            students: state.students.map(s =>
            s.id === action.payload.id
                ? {
                    ...s,
                    grades: {
                    ...s.grades,
                    [action.payload.subject]: [
                        ...s.grades[action.payload.subject],
                        action.payload.grade
                    ]
                    }
                }
                : s
            )
        };
    case "REMOVE_STUDENT":
      return { ...state, students: state.students.filter(s => s.id !== action.payload) };
    case "SET_FILTER":
      return { ...state, filter: action.payload };
    case "SET_CLASS_FILTER":
      return { ...state, classFilter: action.payload };
    case "SET_SORT":
      return { ...state, sort: action.payload };
    case "TOGGLE_DARK":
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
}

export function ClassroomProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialData);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(state));
  }, [state]);

  return (
    <ClassroomContext.Provider value={{ state, dispatch }}>
      {children}
    </ClassroomContext.Provider>
  );
}
