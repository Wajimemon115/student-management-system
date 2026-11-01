import { useEffect, useState } from "react";
import api from "../api/axios";
import { useToast } from "../context/ToastContext";
import Table from "./Table";
import Button from "./Button";
import FormSelect from "./FormSelect";
import FormInput from "./FormInput";

// YYYY-MM-DD in the user's local time zone
const today = () => new Date().toLocaleDateString("en-CA");

export default function AttendanceMark() {
  const notify = useToast();

  const [courses, setCourses] = useState([]);
  const [courseId, setCourseId] = useState("");
  const [date, setDate] = useState(today());
  const [students, setStudents] = useState([]);
  const [statuses, setStatuses] = useState({});
  const [alreadySaved, setAlreadySaved] = useState(false);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  // courses for the dropdown
  useEffect(() => {
    api
      .get("/courses/", { params: { page_size: 100 } })
      .then((res) => setCourses(res.data.results))
      .catch(() => notify("Could not load courses", "error"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // students of the course + any attendance already saved for that date
  useEffect(() => {
    if (!courseId || !date) {
      setStudents([]);
      setStatuses({});
      setAlreadySaved(false);
      return;
    }

    let cancelled = false;
    setLoading(true);

    Promise.all([
      api.get("/students/", {
        params: { course: courseId, ordering: "roll_number", page_size: 100 },
      }),
      api.get("/attendance/", {
        params: { course: courseId, date, page_size: 100 },
      }),
    ])
      .then(([stu, att]) => {
        if (cancelled) return;
        const existing = {};
        att.data.results.forEach((r) => {
          existing[r.student] = r.status;
        });
        const map = {};
        stu.data.results.forEach((s) => {
          map[s.id] = existing[s.id] ?? "present";
        });
        setStudents(stu.data.results);
        setStatuses(map);
        setAlreadySaved(att.data.results.length > 0);
      })
      .catch(() => {
        if (!cancelled) notify("Could not load students", "error");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId, date, reloadKey]);

  const setStatus = (id, status) =>
    setStatuses((s) => ({ ...s, [id]: status }));

  const setAll = (status) => {
    const map = {};
    students.forEach((s) => {
      map[s.id] = status;
    });
    setStatuses(map);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await api.post("/attendance/bulk/", {
        date,
        records: students.map((s) => ({ student: s.id, status: statuses[s.id] })),
      });
      notify(`Attendance saved for ${res.data.saved} students`);
      setReloadKey((k) => k + 1);
    } catch {
      notify("Could not save attendance", "error");
    } finally {
      setSaving(false);
    }
  };

  const presentCount = Object.values(statuses).filter((s) => s === "present").length;
  const absentCount = students.length - presentCount;

  const columns = [
    { key: "roll_number", label: "Roll No" },
    { key: "name", label: "Student" },
    {
      key: "status",
      label: "Status",
      render: (row) => (
        <div className="seg">
          <button
            type="button"
            className={statuses[row.id] === "present" ? "seg-btn present" : "seg-btn"}
            onClick={() => setStatus(row.id, "present")}
          >
            Present
          </button>
          <button
            type="button"
            className={statuses[row.id] === "absent" ? "seg-btn absent" : "seg-btn"}
            onClick={() => setStatus(row.id, "absent")}
          >
            Absent
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="card">
      <div className="attendance-controls">
        <FormSelect
          label="Course"
          placeholder="Select a course"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
          options={courses.map((c) => ({
            value: c.id,
            label: `${c.code} - ${c.name}`,
          }))}
        />
        <FormInput
          label="Date"
          type="date"
          value={date}
          max={today()}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      {!courseId ? (
        <div className="empty">Select a course to mark attendance</div>
      ) : loading ? (
        <div className="empty">Loading students...</div>
      ) : students.length === 0 ? (
        <div className="empty">No students are enrolled in this course</div>
      ) : (
        <>
          {alreadySaved && (
            <div className="notice">
              Attendance was already recorded for this date. Saving will update it.
            </div>
          )}

          <div className="summary-bar">
            <div className="summary-chips">
              <span className="badge badge-green">Present: {presentCount}</span>
              <span className="badge badge-red">Absent: {absentCount}</span>
              <span className="badge badge-blue">Total: {students.length}</span>
            </div>
            <div className="row-actions">
              <Button variant="secondary" size="sm" onClick={() => setAll("present")}>
                All present
              </Button>
              <Button variant="secondary" size="sm" onClick={() => setAll("absent")}>
                All absent
              </Button>
            </div>
          </div>

          <Table columns={columns} data={students} />

          <div className="save-bar">
            <Button onClick={handleSave} disabled={saving}>
              {saving ? "Saving..." : "Save Attendance"}
            </Button>
          </div>
        </>
      )}
    </div>
  );
}