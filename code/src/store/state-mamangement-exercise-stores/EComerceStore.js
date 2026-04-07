import { create } from "zustand";

export const useProductStore = create((set, get) => ({
  products: [
    { id: 1, name: "React Book", price: 45, category: "books" },
    { id: 2, name: "JS T-shirt", price: 30, category: "clothing" },
    { id: 3, name: "CSS Stickers", price: 5, category: "accessories" },
    { id: 4, name: "Node.js Mug", price: 15, category: "accessories" },
    { id: 5, name: "TypeScript Course", price: 99, category: "courses" },
  ],
  favorites: [],
  searchQuery: "",
  category: "all",

  toggleFavorite: (id) => set((s) => ({
    favorites: s.favorites.includes(id)
      ? s.favorites.filter(f => f !== id)
      : [...s.favorites, id],
  })),

  setSearch: (q) => set({ searchQuery: q }),
  setCategory: (c) => set({ category: c }),

  getFilteredProducts: () => {
    const { products, searchQuery, category } = get();
    let result = products;
    if (category !== "all") result = result.filter(p => p.category === category);
    if (searchQuery) result = result.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return result;
  },
  isFavorite: (id) => get().favorites.includes(id),
}));