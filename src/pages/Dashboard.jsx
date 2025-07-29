import { useEffect, useState } from "react";
import { Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
  CategoryScale, LinearScale, PointElement, LineElement
} from "chart.js";
import Card from "../components/Card";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(() => {
    const today = new Date();
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`;
  });

  useEffect(() => {
    const stored = localStorage.getItem("transactions");
    if (stored) setTransactions(JSON.parse(stored));
  }, []);

  const filteredTxns = transactions.filter(txn => txn.date.startsWith(selectedMonth));
  const filteredTotal = filteredTxns.reduce((sum, txn) => sum + txn.amount, 0);

  const categoryTotals = filteredTxns.reduce((acc, txn) => {
    acc[txn.category] = (acc[txn.category] || 0) + txn.amount;
    return acc;
  }, {});

  const dailyTotals = {};
  filteredTxns.forEach(txn => {
    dailyTotals[txn.date] = (dailyTotals[txn.date] || 0) + txn.amount;
  });

  const pieData = {
    labels: Object.keys(categoryTotals),
    datasets: [{
      label: "Spending by Category",
      data: Object.values(categoryTotals),
      backgroundColor: ["#c084fc", "#a78bfa", "#8b5cf6", "#7c3aed", "#6d28d9"]
    }],
  };

  const lineChartData = {
    labels: Object.keys(dailyTotals),
    datasets: [{
      label: "Daily Spending",
      data: Object.values(dailyTotals),
      borderColor: "#7c3aed",
      fill: false,
    }],
  };

  return (
    <div className="container" style={{ color: "#2a1a4a" }}>
      <h1 style={{ fontWeight: 600, color: '#4c1d95' }}>📊 Dashboard</h1>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
        <Card title="Total Spending" amount={transactions.reduce((sum, t) => sum + t.amount, 0)} count={transactions.length} />
        <Card title="Selected Month" amount={filteredTotal} count={filteredTxns.length} />
        <Card title="Transactions Count" amount={filteredTxns.length} count={0} />
      </div>

      <div className="card">
        <label style={{ color: '#2a1a4a' }}>
          Select Month:
          <input
            type="month"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            style={{ marginLeft: "1rem" }}
          />
        </label>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
        <div className="card">
          <h3>Pie Chart</h3>
          {filteredTxns.length > 0 ? <Pie data={pieData} /> : <p>No data yet</p>}
        </div>
        <div className="card">
          <h3>Line Chart</h3>
          {filteredTxns.length > 0 ? <Line data={lineChartData} /> : <p>No data yet</p>}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
