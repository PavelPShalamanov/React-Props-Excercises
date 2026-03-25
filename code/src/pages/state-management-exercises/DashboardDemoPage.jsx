import { ThemeProvider } from "../../context/ThemeContext";
import { AuthProvider } from "../../context/AuthContext";
import { LangProvider } from "../../context/LangContext";

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