import { ThemeProvider } from "../../context/state-mamangement-exercise-contexts/ThemeContext";
import { AuthProvider } from "../../context/state-mamangement-exercise-contexts/AuthContext";
import { LangProvider } from "../../context/state-mamangement-exercise-contexts/LangContext";

import Header from "../../components/state-management-exercises/dashboard-example/Header";
import Sidebar from "../../components/state-management-exercises/dashboard-example/Sidebar";
import MainContent from "../../components/state-management-exercises/dashboard-example/MainContent";

export default function DashboardDemoPage() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <LangProvider>
          <Header />

          <div style={{ display: "flex" }}>
            <Sidebar />
            <MainContent />
          </div>
        </LangProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}