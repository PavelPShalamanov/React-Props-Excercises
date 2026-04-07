import { useProductStore } from "../../../store/state-mamangement-exercise-stores/EComerceStore";

export default function SearchBar() {
  const setSearch = useProductStore((s) => s.setSearch);
  return (
    <input
      type="text"
      placeholder="Search products..."
      onChange={(e) => setSearch(e.target.value)}
      style={{ padding: "0.5rem", marginBottom: "1rem", width: "100%" }}
    />
  );
}