import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));
  const value = { theme, toggleTheme };
  return (
    <ThemeContext.Provider value={value}>
      <div style={{
        background: theme === "light" ? "#f9f9f9" : "#121212",
        color: theme === "light" ? "#000" : "#fff",
        minHeight: "100vh",
        transition: "all 0.3s",
        padding: "1rem"
      }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}