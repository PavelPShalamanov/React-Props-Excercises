// todoStore.js
import { create } from 'zustand';

export const useTodoStore = create((set, get) => ({
  todos: [
    { id: 1, text: "Learn useReducer", done: true },
    { id: 2, text: "Learn Context API", done: true },
    { id: 3, text: "Learn Zustand", done: false },
    { id: 4, text: "Create Project", done: false },
  ],
  filter: 'all',    
  searchQuery: '',

  addTodo: (text) =>
    set((s) => ({
      todos: [...s.todos, { id: Date.now(), text, done: false }],
    })),

  toggleTodo: (id) =>
    set((s) => ({
      todos: s.todos.map(t =>
        t.id === id ? { ...t, done: !t.done } : t
      ),
    })),

  deleteTodo: (id) =>
    set((s) => ({
      todos: s.todos.filter(t => t.id !== id),
    })),

  setFilter: (filter) => set({ filter }),
  setSearch: (searchQuery) => set({ searchQuery }),

  // Keep these as utility functions, not for direct use in selectors
  getStats: () => {
    const { todos } = get();
    const total = todos.length;
    const done = todos.filter((t) => t.done).length;
    const remaining = total - done;
    const percentage = total ? Math.round((done / total) * 100) : 0;
    return { total, done, remaining, percentage };
  },
}));

// Create a separate selector hook for filtered todos
export const useFilteredTodos = () => {
  return useTodoStore((state) => {
    const { todos, filter, searchQuery } = state;
    let result = todos;

    if (filter === "active") result = result.filter((t) => !t.done);
    if (filter === "completed") result = result.filter((t) => t.done);

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter((t) => t.text.toLowerCase().includes(query));
    }

    return result;
  }, (a, b) => {
    // Custom equality: compare array contents, not reference
    if (a.length !== b.length) return false;
    return a.every((todo, i) => todo.id === b[i]?.id && todo.done === b[i]?.done && todo.text === b[i]?.text);
  });
};