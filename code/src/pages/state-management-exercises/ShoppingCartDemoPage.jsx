import { useReducer, useState } from "react";
import ProductCatalog from "../../components/state-management-exercises/shopping-cart-example/ProductCatalog";
import CartItem from "../../components/state-management-exercises/shopping-cart-example/CartItem";
import CartSummary from "../../components/state-management-exercises/shopping-cart-example/CartSummary";

const PRODUCTS = [
  { id: 1, name: "React T-shirt", price: 29.99, emoji: "👕" },
  { id: 2, name: "JavaScript mug", price: 14.99, emoji: "☕" },
  { id: 3, name: "CSS stickers", price: 4.99, emoji: "🎨" },
  { id: 4, name: "Node.js hat", price: 24.99, emoji: "🧢" },
];

// Reducer
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find(
        (i) => i.product.id === action.product.id
      );

      if (existing) {
        return {
          items: state.items.map((i) =>
            i.product.id === action.product.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }

      return {
        items: [...state.items, { product: action.product, quantity: 1 }],
      };
    }

    case "REMOVE_ITEM":
      return {
        items: state.items.filter((i) => i.product.id !== action.id),
      };

    case "UPDATE_QUANTITY":
      return {
        items: state.items
          .map((i) =>
            i.product.id === action.id
              ? { ...i, quantity: Math.max(0, action.quantity) }
              : i
          )
          .filter((i) => i.quantity > 0),
      };

    case "CLEAR_CART":
      return { items: [] };

    default:
      return state;
  }
}


export default function ShoppingCartDemoPage() {
  const [cart, dispatch] = useReducer(cartReducer, { items: [] });
  const [showCart, setShowCart] = useState(false);

  const totalItems = cart.items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = cart.items.reduce(
    (sum, i) => sum + i.product.price * i.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart (useReducer)</h1>

      <button onClick={() => setShowCart((s) => !s)}>
        🛒 Cart ({totalItems})
      </button>

      <ProductCatalog
        products={PRODUCTS}
        onAdd={(product) =>
          dispatch({ type: "ADD_ITEM", product })
        }
      />

      {showCart && (
        <div
          style={{
            position: "fixed",
            right: 0,
            top: 0,
            width: "300px",
            height: "100%",
            background: "#f9f9f9",
            borderLeft: "1px solid #ccc",
            padding: "10px",
            overflowY: "auto",
          }}
        >
          <h3>Cart ({totalItems})</h3>

          {cart.items.length === 0 && <p>Cart is empty</p>}

          {cart.items.map((item) => (
            <CartItem
              key={item.product.id}
              item={item}
              onUpdateQty={(qty) =>
                dispatch({
                  type: "UPDATE_QUANTITY",
                  id: item.product.id,
                  quantity: qty,
                })
              }
              onRemove={() =>
                dispatch({
                  type: "REMOVE_ITEM",
                  id: item.product.id,
                })
              }
            />
          ))}

          <CartSummary
            total={totalPrice}
            onClear={() => dispatch({ type: "CLEAR_CART" })}
          />
        </div>
      )}
    </div>
  );
}