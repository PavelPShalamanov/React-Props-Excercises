import { useProductStore } from "../../../store/state-mamangement-exercise-stores/EComerceStore";
import ProductCard from "./ProductCard";
import { useMemo } from "react";

export default function ProductGrid({ onAddToCart }) {
  const products = useProductStore((s) => s.products);
  const searchQuery = useProductStore((s) => s.searchQuery);
  const selectedCategory = useProductStore((s) => s.selectedCategory);
  
  const filteredProducts = useMemo(() => {
    let result = products;
    
    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.description?.toLowerCase().includes(query)
      );
    }
    
    return result;
  }, [products, searchQuery, selectedCategory]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {filteredProducts.map(p => <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />)}
    </div>
  );
}