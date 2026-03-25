import { useTodoStore } from "../../../store/todoStore";

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