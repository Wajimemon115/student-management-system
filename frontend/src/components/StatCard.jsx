export default function StatCard({ label, value, loading = false }) {
  if (loading) {
    return (
      <div className="stat-card">
        <div className="skeleton skeleton-label" />
        <div className="skeleton skeleton-value" />
      </div>
    );
  }

  return (
    <div className="stat-card">
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
    </div>
  );
}