export default function CartItem({ item, onUpdateQty, onRemove }) {
  const { product, quantity } = item;

  return (
    <div
      style={{
        borderBottom: "1px solid #ccc",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontWeight: "bold",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          title={product.name}
        >
          {product.name}
        </div>

        <div style={{ fontSize: "14px", color: "#555" }}>
          ${product.price}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          whiteSpace: "nowrap",
        }}
      >
        <button onClick={() => onUpdateQty(quantity - 1)}>-</button>

        <span style={{ minWidth: "20px", textAlign: "center" }}>
          {quantity}
        </span>

        <button onClick={() => onUpdateQty(quantity + 1)}>+</button>
      </div>

      <button onClick={onRemove}>✕</button>
    </div>
  );
}