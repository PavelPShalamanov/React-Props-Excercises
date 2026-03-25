export default function Cart({ items, dispatch }) {
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  return (
    <div style={{ padding: "1rem", border: "1px solid #aaa", borderRadius: "8px", marginBottom: "1rem" }}>
      <h3>Cart</h3>
      {items.length === 0 ? <p>Empty</p> : items.map(item => (
        <div key={item.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
          <span>{item.name} x {item.quantity}</span>
          <div>
            <button onClick={() => dispatch({ type: "UPDATE_QUANTITY", id: item.id, quantity: item.quantity - 1 })} disabled={item.quantity <= 1}>-</button>
            <button onClick={() => dispatch({ type: "UPDATE_QUANTITY", id: item.id, quantity: item.quantity + 1 })}>+</button>
            <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", id: item.id })}>❌</button>
          </div>
        </div>
      ))}
      <hr />
      <p>Total: ${total}</p>
      <button onClick={() => dispatch({ type: "CLEAR_CART" })}>Clear Cart</button>
    </div>
  );
}