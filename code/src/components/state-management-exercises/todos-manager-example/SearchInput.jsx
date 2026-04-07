import { useTodoStore } from "../../../store/state-mamangement-exercise-stores/todoStore";

export default function SearchInput() {
  const searchQuery = useTodoStore((s) => s.searchQuery);
  const setSearch = useTodoStore((s) => s.setSearch);

  return (
    <input
    type="text"
    placeholder="Search todos..."
    value={searchQuery}
    onChange={(e) => setSearch(e.target.value)}
    className="search-input"
    />
  );
}