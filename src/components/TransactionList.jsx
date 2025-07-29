function TransactionList({ transactions, onDelete }) {
  return (
    <div>
      <h4>Transaction History ({transactions.length})</h4>
      {transactions.length === 0 ? (
        <p>No transactions yet.</p>
      ) : (
        <ul style={{
          listStyle: "none",
          padding: 0,
          marginTop: "1rem"
        }}>
          {transactions.map((txn, i) => (
            <li key={i} style={{
              padding: "0.75rem",
              borderBottom: "1px solid #eee",
              display: "flex",
              justifyContent: "space-between"
            }}>
              <div>
                <strong>{txn.date}</strong> — ${txn.amount} — {txn.category}
                <div style={{ fontSize: "0.85rem", color: "#6b7280" }}>{txn.description}</div>
              </div>
              <button onClick={() => onDelete(i)} style={{
                background: "transparent",
                color: "#e11d48",
                border: "none",
                fontWeight: "bold",
                cursor: "pointer"
              }}>✕</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TransactionList;
