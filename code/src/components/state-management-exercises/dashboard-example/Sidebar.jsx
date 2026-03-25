import { useLang } from "../../../context/LangContext";
import { useTheme } from "../../../context/ThemeContext";

export default function Sidebar() {
  const { t } = useLang();
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
  <aside
      style={{
      width: "200px",
      padding: "10px",
      background: isDark ? "#333" : "#f0f0f0",
      color: isDark ? "#fff" : "#000",
      }}
  >
      <p>{t("dashboard")}</p>
      <p>{t("quizzes")}</p>
      <p>{t("settings")}</p>
  </aside>
);
}