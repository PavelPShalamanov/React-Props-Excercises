export default function ProductCatalog({ onAdd, products }) {
  return (
    <div>
      <h2>Products</h2>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "150px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "30px" }}>{p.emoji}</div>
            <h4>{p.name}</h4>
            <p>${p.price}</p>

            <button onClick={() => onAdd(p)}>Add</button>
          </div>
        ))}
      </div>
    </div>
  );
}