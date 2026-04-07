import { useReducer } from "react";
import { ThemeProvider } from "../../context/state-mamangement-exercise-contexts/EComerceThemeContext";
import { AuthProvider } from "../../context/state-mamangement-exercise-contexts/EComerceAuthContext";

import cartReducer from "../../components/state-management-exercises/e-comerce-example/CartReducer";
import NavBar from "../../components/state-management-exercises/e-comerce-example/NavBar";
import SearchBar from "../../components/state-management-exercises/e-comerce-example/SearchBar";
import CategoryFilter from "../../components/state-management-exercises/e-comerce-example/CategoryFilter";
import ProductGrid from "../../components/state-management-exercises/e-comerce-example/ProductGrid";
import FavoritesPanel from "../../components/state-management-exercises/e-comerce-example/FavoritesPanel";
import Cart from "../../components/state-management-exercises/e-comerce-example/Cart";

export default function EComerceDemoPage() {
  const [cart, cartDispatch] = useReducer(cartReducer, { items: [] });

  return (
    <ThemeProvider>
      <AuthProvider>
        <NavBar cartItemCount={cart.items.length} />
        <div style={{ display: "flex", gap: "1rem" }}>
          <div style={{ flex: 3 }}>
            <SearchBar />
            <CategoryFilter />
            <ProductGrid onAddToCart={(product) => cartDispatch({ type: "ADD_TO_CART", product })} />
          </div>
          <div style={{ flex: 1 }}>
            <Cart items={cart.items} dispatch={cartDispatch} />
            <FavoritesPanel />
          </div>
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}