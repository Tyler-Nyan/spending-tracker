import { useState } from "react";
import categories from "../data/spending-category.json";

function TransactionForm({ onAdd }) {
  const [form, setForm] = useState({
    date: "",
    amount: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.amount && form.category && form.date) {
      onAdd({ ...form, amount: parseFloat(form.amount) });
      setForm({ date: "", amount: "", category: "", description: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1rem" }}>
      <div style={{ display: "flex", gap: "1rem" }}>
        <input name="date" type="date" value={form.date} onChange={handleChange} required />
        <input name="amount" type="number" value={form.amount} onChange={handleChange} placeholder="0.00" required />
      </div>
      <select name="category" value={form.category} onChange={handleChange} required>
        <option value="">Select a category</option>
        {categories.map((cat, idx) => (
          <option key={idx} value={cat}>{cat}</option>
        ))}
      </select>
      <input name="description" type="text" placeholder="Optional description" value={form.description} onChange={handleChange} />
      <button style={{
        backgroundColor: "#7c3aed",
        color: "white",
        border: "none",
        borderRadius: "6px",
        padding: "10px"
      }}>Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
