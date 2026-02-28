import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";

import StudentCardDemoPage from "./pages/StudentCardDemoPage";
import StatusIndicatorDemoPage from "./pages/StatusIndicatorDemoPage";
import AccordionDemoPage from "./pages/AccordionDemoPage";
import FilterableStudentListDemoPage from "./pages/FilterableStudentListDemoPage";
import TabsDemoPage from "./pages/TabsDemoPage";
import ClassroomDemoPage from "./pages/ClassroomDemoPage";
import QuizBuilderDemoPage from "./pages/QuizBuilderDemoPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="student-card-demo-page" element={<StudentCardDemoPage />} />
        <Route path="status-indicator-demo-page" element={<StatusIndicatorDemoPage />} />
        <Route path="accordion-demo-page" element={<AccordionDemoPage />} />
        <Route path="filterable-student-list-demo-page" element={<FilterableStudentListDemoPage />} />
        <Route path="tabs-demo-page" element={<TabsDemoPage />} />
        <Route path="classroom-demo-page" element={<ClassroomDemoPage />} />
        <Route path="quiz-builder-demo-page" element={<QuizBuilderDemoPage />} />
      </Route>
    </Routes>
  );
}

export default App;