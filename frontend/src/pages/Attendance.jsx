import { useState } from "react";
import PageHeader from "../components/PageHeader";
import AttendanceMark from "../components/AttendanceMark";
import AttendanceHistory from "../components/AttendanceHistory";
import { useAuth } from "../context/AuthContext";

export default function Attendance() {
  const { canWrite } = useAuth();
  const [tab, setTab] = useState(canWrite ? "mark" : "history");

  return (
    <>
      <PageHeader title="Attendance" subtitle="Track student attendance" />

      <div className="tabs">
        {canWrite && (
          <button
            type="button"
            className={tab === "mark" ? "tab active" : "tab"}
            onClick={() => setTab("mark")}
          >
            Mark Attendance
          </button>
        )}
        <button
          type="button"
          className={tab === "history" || !canWrite ? "tab active" : "tab"}
          onClick={() => setTab("history")}
        >
          History
        </button>
      </div>

      {tab === "mark" && canWrite ? <AttendanceMark /> : <AttendanceHistory />}
    </>
  );
}