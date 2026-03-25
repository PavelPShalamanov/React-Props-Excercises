import { useTheme } from "../../../context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();

  const styles = {
    background: theme === "dark" ? "#111" : "#eee",
    color: theme === "dark" ? "#fff" : "#000",
    padding: "10px",
    marginTop: "20px",
    textAlign: "center"
  };

  return (
    <footer style={styles}>
      <p>© 2026 Quiz App</p>
    </footer>
  );
}