import { useTheme } from "../../../context/EComerceThemeContext";
import { useAuth } from "../../../context/EComerceAuthContext";

export default function NavBar({ cartItemCount }) {
  const { theme, toggleTheme } = useTheme();
  const { user, login, logout } = useAuth();

  return (
    <div style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "0.5rem 1rem", marginBottom: "1rem",
      background: theme === "light" ? "#eee" : "#333", borderRadius: "8px"
    }}>
      <h1>Mini E-Commerce</h1>
      <div>
        <button onClick={toggleTheme}>{theme === "light" ? "🌙 Dark" : "☀️ Light"}</button>
        {user ? (
          <>
            <span style={{ margin: "0 1rem" }}>{user.name}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <button onClick={() => login("demo@example.com")}>Login</button>
        )}
        <span style={{ marginLeft: "1rem" }}>🛒 {cartItemCount}</span>
      </div>
    </div>
  );
}