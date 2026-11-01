import { useEffect, useState } from "react";
import api from "../api/axios";
import useCrud from "../hooks/useCrud";
import Table from "./Table";
import Button from "./Button";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";

const PAGE_SIZE = 10;

export default function AttendanceHistory() {
  const { items, count, page, setPage, loading, error, onSearch, filters, setFilter, reload } =
    useCrud("attendance", PAGE_SIZE);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    api
      .get("/courses/", { params: { page_size: 100 } })
      .then((res) => setCourses(res.data.results))
      .catch(() => {});
  }, []);

  const columns = [
    { key: "date", label: "Date" },
    { key: "roll_number", label: "Roll No" },
    { key: "student_name", label: "Student" },
    {
      key: "status",
      label: "Status",
      render: (r) => (
        <span className={`badge ${r.status === "present" ? "badge-green" : "badge-red"}`}>
          {r.status === "present" ? "Present" : "Absent"}
        </span>
      ),
    },
  ];

  const hasFilters = filters.course || filters.date;

  return (
    <div className="card">
      <div className="toolbar">
        <SearchBar onChange={onSearch} placeholder="Search student or roll no..." />
        <select
          className="form-input filter-select"
          value={filters.course ?? ""}
          onChange={(e) => setFilter("course", e.target.value)}
        >
          <option value="">All courses</option>
          {courses.map((c) => (
            <option key={c.id} value={c.id}>
              {c.code} - {c.name}
            </option>
          ))}
        </select>
        <input
          type="date"
          className="form-input filter-select"
          value={filters.date ?? ""}
          onChange={(e) => setFilter("date", e.target.value)}
        />
        {hasFilters && (
          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              setFilter("course", "");
              setFilter("date", "");
            }}
          >
            Clear filters
          </Button>
        )}
      </div>

      {error ? (
        <div className="error-box">
          <span>{error}</span>
          <Button variant="danger" size="sm" onClick={reload}>
            Retry
          </Button>
        </div>
      ) : loading && items.length === 0 ? (
        <div className="empty">Loading...</div>
      ) : (
        <div className={loading ? "dimmed" : ""}>
          <Table columns={columns} data={items} emptyText="No attendance records found" />
        </div>
      )}

      <Pagination page={page} count={count} pageSize={PAGE_SIZE} onPageChange={setPage} />
    </div>
  );
}