import SearchInput from "../../components/state-management-exercises/todos-manager-example/SearchInput";
import FilterButtons from "../../components/state-management-exercises/todos-manager-example/FilterButtons";
import AddTodoForm from "../../components/state-management-exercises/todos-manager-example/AddTodoForm";
import TodoList from "../../components/state-management-exercises/todos-manager-example/TodoList";
import Stats from "../../components/state-management-exercises/todos-manager-example/Stats";
import "../../components/state-management-exercises/todos-manager-example/TodosManagerStyles.css";

export default function TodosManagerDemoPage() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 border border-gray-200 rounded-xl shadow-lg bg-white">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Zustand Todo App</h1>
      <AddTodoForm />
      <SearchInput />
      <FilterButtons />
      <TodoList />
      <Stats />
    </div>
  );
}