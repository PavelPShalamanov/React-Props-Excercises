import { ThemeProvider } from "../../context/ThemeContext";
import Header from "../../components/state-management-exercises/theme-example/Header";
import QuizCard from "../../components/state-management-exercises/theme-example/QuizCard";
import Footer from "../../components/state-management-exercises/theme-example/Footer";

export default function ThemeDemoPage() {
  return (
    <ThemeProvider>
      <Header />

      <div style={{ padding: "20px" }}>
        <h1>Theme System Demo (Context API)</h1>

        <QuizCard title="HTML" questions={32} />
        <QuizCard title="CSS" questions={28} />
        <QuizCard title="JavaScript" questions={40} />
      </div>

      <Footer />
    </ThemeProvider>
  );
}