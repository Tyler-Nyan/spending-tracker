function Card({ title, amount, count }) {
  return (
    <div className="card" style={{ width: "300px" }}>
      <p style={{ fontSize: "0.85rem", color: "#7c3aed" }}>{title}</p>
      <h2 style={{ color: "#4c1d95" }}>${amount.toFixed(2)}</h2>
      {count > 0 && <p style={{ fontSize: "0.75rem", color: "#a1a1aa" }}>{count} transactions</p>}
    </div>
  );
}

export default Card;
