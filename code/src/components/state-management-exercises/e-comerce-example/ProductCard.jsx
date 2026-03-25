import { useProductStore } from "../../../store/EComerceStore";

export default function ProductCard({ product, onAddToCart }) {
  const toggleFavorite = useProductStore((s) => s.toggleFavorite);
  const isFavorite = useProductStore((s) => s.isFavorite(product.id));
  return (
    <div style={{
      border: "1px solid #ccc", borderRadius: "8px", padding: "1rem",
      margin: "0.5rem", width: "150px", display: "flex", flexDirection: "column",
      justifyContent: "space-between"
    }}>
      <h4>{product.name}</h4>
      <p>${product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to cart</button>
      <button onClick={() => toggleFavorite(product.id)}>
        {isFavorite ? "💖" : "🤍"} Favorite
      </button>
    </div>
  );
}