import { useTheme } from "../../../context/state-mamangement-exercise-contexts/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  const styles = {
    background: theme === "dark" ? "#1a1a2e" : "#017ae0",
    color: "white",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between"
  };

  return (
    <header style={styles}>
      <h2>Quiz App</h2>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"}
      </button>
    </header>
  );
}