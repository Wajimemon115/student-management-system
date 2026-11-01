import Button from "./Button";

export default function Pagination({ page, count, pageSize = 10, onPageChange }) {
  if (count === 0) return null;

  const totalPages = Math.max(1, Math.ceil(count / pageSize));
  const start = (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, count);

  return (
    <div className="pagination">
      <span className="pagination-info">
        Showing {start}–{end} of {count}
      </span>
      <div className="pagination-controls">
        <Button
          variant="secondary"
          size="sm"
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
        >
          Previous
        </Button>
        <span>
          Page {page} of {totalPages}
        </span>
        <Button
          variant="secondary"
          size="sm"
          disabled={page >= totalPages}
          onClick={() => onPageChange(page + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}