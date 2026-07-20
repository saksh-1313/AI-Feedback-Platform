import { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

function Dashboard() {
  const [stats, setStats] = useState({
    total: 0,
    positive: 0,
    negative: 0,
    neutral: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/feedback/stats",
          {
            headers: {
              Authorization: token,
            },
          }
        );

        setStats(res.data);
      } catch (err) {
        console.log("Error fetching stats:", err);
      }
    };

    fetchStats();
  }, []);

  const chartData = [
    {
      name: "Positive",
      value: stats.positive,
    },
    {
      name: "Negative",
      value: stats.negative,
    },
    {
      name: "Neutral",
      value: stats.neutral,
    },
  ];

  return (
    <>
      <Navbar />

      <div className="main">
        <Sidebar />

        <div className="dashboard">
          <h1>Dashboard</h1>
          <p>Welcome to AI Feedback Platform</p>

          <div className="card-container">
            <div className="card">
              <h2>Total Feedback</h2>
              <h1>{stats.total}</h1>
            </div>

            <div className="card">
              <h2>Positive</h2>
              <h1>{stats.positive}</h1>
            </div>

            <div className="card">
              <h2>Negative</h2>
              <h1>{stats.negative}</h1>
            </div>

            <div className="card">
              <h2>Neutral</h2>
              <h1>{stats.neutral}</h1>
            </div>
          </div>

          <div style={{ marginTop: "40px", textAlign: "center" }}>
            <h2>Feedback Sentiment Analysis</h2>

            <PieChart width={500} height={350}>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                outerRadius={120}
                dataKey="value"
                label
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;