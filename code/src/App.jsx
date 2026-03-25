import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";

import StudentCardDemoPage from "./pages/props-exercises/StudentCardDemoPage";
import StatusIndicatorDemoPage from "./pages/props-exercises/StatusIndicatorDemoPage";
import AccordionDemoPage from "./pages/props-exercises/AccordionDemoPage";
import FilterableStudentListDemoPage from "./pages/props-exercises/FilterableStudentListDemoPage";
import TabsDemoPage from "./pages/props-exercises/TabsDemoPage";
import ClassroomDemoPage from "./pages/props-exercises/ClassroomDemoPage";
import QuizBuilderDemoPage from "./pages/props-exercises/QuizBuilderDemoPage";

import CounterDemoPage from "./pages/state-management-exercises/CounterWithReducerDemoPage";
import ThemeDemoPage from "./pages/state-management-exercises/ThemeDemoPage";
import NotificationDemoPage from "./pages/state-management-exercises/NotificationDemoPage";
import ShoppingCartDemoPage from "./pages/state-management-exercises/ShoppingCartDemoPage";
import DashboardDemoPage from "./pages/state-management-exercises/DashboardDemoPage";
import TodosManagerDemoPage from "./pages/state-management-exercises/TodosManagerDemoPage";
import EComerceDemoPage from "./pages/state-management-exercises/EComerceDemoPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="props/student-card-demo-page" element={<StudentCardDemoPage />} />
        <Route path="props/status-indicator-demo-page" element={<StatusIndicatorDemoPage />} />
        <Route path="props/accordion-demo-page" element={<AccordionDemoPage />} />
        <Route path="props/filterable-student-list-demo-page" element={<FilterableStudentListDemoPage />} />
        <Route path="props/tabs-demo-page" element={<TabsDemoPage />} />
        <Route path="props/classroom-demo-page" element={<ClassroomDemoPage />} />
        <Route path="props/quiz-builder-demo-page" element={<QuizBuilderDemoPage />} />

        <Route path="state-management/counter-with-reducer-demo-page" element={<CounterDemoPage />} />
        <Route path="state-management/theme-demo-page" element={<ThemeDemoPage />} />
        <Route path="state-management/notifications-demo-page" element={<NotificationDemoPage />} />
        <Route path="state-management/shopping-cart-demo-page" element={<ShoppingCartDemoPage />} />
        <Route path="state-management/dashboard-demo-page" element={<DashboardDemoPage />} />
        <Route path="state-management/todos-manager-demo-page" element={<TodosManagerDemoPage />} />
        <Route path="state-management/e-comerce-demo-page" element={<EComerceDemoPage />} />
      </Route>
    </Routes>
  );
}

export default App;