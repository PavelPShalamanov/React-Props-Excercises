import { useProductStore } from "../../../store/state-mamangement-exercise-stores/EComerceStore";
import { useMemo } from "react";

export default function FavoritesPanel() {
  const favorites = useProductStore((s) => s.favorites);
  const products = useProductStore((s) => s.products);
  
  const favoriteProducts = useMemo(() => {
    return products.filter(p => favorites.includes(p.id));
  }, [products, favorites]);

  return (
    <div style={{ padding: "1rem", border: "1px solid #aaa", borderRadius: "8px" }}>
      <h3>Favorites</h3>
      {favoriteProducts.length === 0 ? <p>None</p> : favoriteProducts.map(p => <div key={p.id}>{p.name}</div>)}
    </div>
  );
}