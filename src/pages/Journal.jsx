import { useEffect, useState } from "react";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";

function Journal() {
  const [transactions, setTransactions] = useState([]);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("transactions");
    if (stored) setTransactions(JSON.parse(stored));
    setFirstLoad(false);
  }, []);

  useEffect(() => {
    if (!firstLoad) {
      localStorage.setItem("transactions", JSON.stringify(transactions));
    }
  }, [transactions, firstLoad]);

  const addTransaction = (txn) => {
    setTransactions((prev) => [...prev, txn]);
  };

  const deleteTransaction = (index) => {
    setTransactions((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <div className="card">
        <h2 style={{ color: '#4c1d95' }}>Expense Journal</h2>
        <TransactionForm onAdd={addTransaction} />
      </div>
      <div className="card">
        <TransactionList transactions={transactions} onDelete={deleteTransaction} />
      </div>
    </div>
  );
}

export default Journal;
