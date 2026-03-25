import { useTheme } from "../../../context/ThemeContext";
import { useAuth } from "../../../context/AuthContext";
import { useLang } from "../../../context/LangContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { user, login, logout } = useAuth();
  const { lang, t, toggleLang } = useLang();

  return (
    <header
      style={{
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        background: theme === "dark" ? "#222" : "#017ae0",
        color: "white",
      }}
    >
      <div>Dashboard</div>

      <div style={{ display: "flex", gap: "10px" }}>
        <button
            onClick={toggleTheme}
            style={{
                background: "transparent",
                color: "white",
                border: "1px solid white",
            }}
        >
            🌙
        </button>

        <button onClick={toggleLang}>
          {lang.toUpperCase()}
        </button>

        {user ? (
          <>
            <span>{user.name}</span>
            <button onClick={logout}>{t("logout")}</button>
          </>
        ) : (
          <button onClick={() => login("Student")}>
            {t("login")}
          </button>
        )}
      </div>
    </header>
  );
}