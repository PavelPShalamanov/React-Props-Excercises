export default function CartSummary({ total, onClear }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Total: ${total.toFixed(2)}</h3>
      <button onClick={onClear}>Clear Cart</button>
    </div>
  );
}