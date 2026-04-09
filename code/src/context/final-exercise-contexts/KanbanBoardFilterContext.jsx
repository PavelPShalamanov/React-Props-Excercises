import { createContext, useState, useContext } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    searchQuery: "",
    priorityFilter: "all",
  });

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context)
    throw new Error("useFilterContext must be used within FilterProvider");
  return context;
};