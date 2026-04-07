import { useAuth } from "../../../context/state-mamangement-exercise-contexts/AuthContext";
import { useLang } from "../../../context/state-mamangement-exercise-contexts/LangContext";
import { useTheme } from "../../../context/state-mamangement-exercise-contexts/ThemeContext";
import { useState } from "react";

export default function MainContent() {
  const { user, login } = useAuth();
  const { t } = useLang();
  const { theme } = useTheme();

  const [name, setName] = useState("");

  const isDark = theme === "dark";

  if (!user) {
    return (
      <div
        style={{
          padding: "20px",
          flex: 1,
          background: isDark ? "#1a1a2e" : "#fff",
          color: isDark ? "#fff" : "#000",        
        }}
      >
        <h2>{t("login")}</h2>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          style={{
            padding: "5px",
            marginRight: "10px",
          }}
        />

        <button onClick={() => login(name)}>Login</button>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "20px",
        background: isDark ? "#1a1a2e" : "#fff",
        color: isDark ? "#fff" : "#000",
        flex: 1,
      }}
    >
      <h2>
        {t("welcome")}, {user.name}!
      </h2>

      <p>This is your dashboard content.</p>
    </div>
  );
}