import { createContext, useContext, useState } from "react";

const translations = {
  bg: {
    dashboard: "Табло",
    quizzes: "Тестове",
    settings: "Настройки",
    welcome: "Добре дошли",
    login: "Вход",
    logout: "Изход",
  },
  en: {
    dashboard: "Dashboard",
    quizzes: "Quizzes",
    settings: "Settings",
    welcome: "Welcome",
    login: "Login",
    logout: "Logout",
  },
};

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState("bg");

  const t = (key) => translations[lang][key] || key;

  const toggleLang = () =>
    setLang((l) => (l === "bg" ? "en" : "bg"));

  return (
    <LangContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be inside LangProvider");
  return ctx;
}