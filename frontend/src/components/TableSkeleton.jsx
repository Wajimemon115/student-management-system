export default function TableSkeleton({ rows = 5, columns = 4 }) {
  return (
    <div className="skeleton-table" aria-hidden="true">
      {Array.from({ length: rows }).map((_, r) => (
        <div
          key={r}
          className="skeleton-row"
          style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
        >
          {Array.from({ length: columns }).map((_, c) => (
            <div key={c} className="skeleton skeleton-line" />
          ))}
        </div>
      ))}
    </div>
  );
}