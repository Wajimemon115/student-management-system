import { useEffect, useState } from "react";
import api from "../api/axios";
import PageHeader from "../components/PageHeader";
import StatCard from "../components/StatCard";
import Button from "../components/Button";

const CARDS = [
  { key: "students", label: "Students" },
  { key: "courses", label: "Courses" },
  { key: "teachers", label: "Teachers" },
  { key: "results", label: "Results" },
  { key: "attendance", label: "Attendance" },
];

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadStats = () => {
    setLoading(true);
    setError("");
    api
      .get("/dashboard/stats/")
      .then((res) => setStats(res.data))
      .catch(() => setError("Could not load dashboard data. Is the backend running?"))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadStats();
  }, []);

  return (
    <>
      <PageHeader title="Dashboard" subtitle="Student Management System" />

      {error ? (
        <div className="error-box">
          <span>{error}</span>
          <Button variant="danger" size="sm" onClick={loadStats}>
            Retry
          </Button>
        </div>
      ) : (
        <div className="stats-grid">
          {CARDS.map((card) => (
            <StatCard
              key={card.key}
              label={card.label}
              value={stats?.[card.key]}
              loading={loading}
            />
          ))}
        </div>
      )}
    </>
  );
}