import { useProductStore } from "../../../store/EComerceStore";

export default function CategoryFilter() {
  const { category, setCategory } = useProductStore();
  return (
    <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ marginBottom: "1rem" }}>
      <option value="all">All</option>
      <option value="books">Books</option>
      <option value="clothing">Clothing</option>
      <option value="accessories">Accessories</option>
      <option value="courses">Courses</option>
    </select>
  );
}