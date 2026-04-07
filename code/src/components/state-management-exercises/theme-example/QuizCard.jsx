import { useTheme } from "../../../context/state-mamangement-exercise-contexts/ThemeContext";

export default function QuizCard({ title, questions }) {
  const { theme } = useTheme();

  const styles = {
    background: theme === "dark" ? "#2e2e3a" : "#ffffff",
    color: theme === "dark" ? "#ffffff" : "#000000",
    padding: "20px",
    margin: "10px",
    borderRadius: "10px",
    border: "1px solid #ccc"
  };

  return (
    <div style={styles}>
      <h3>{title}</h3>
      <p>{questions} questions</p>
    </div>
  );
}