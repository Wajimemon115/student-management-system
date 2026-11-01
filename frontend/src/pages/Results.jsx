import CrudPage from "../components/CrudPage";

const gradeTone = (grade) => {
  if (grade === "A+" || grade === "A") return "green";
  if (grade === "B" || grade === "C") return "blue";
  if (grade === "D") return "amber";
  return "red";
};

const columns = [
  { key: "student_name", label: "Student" },
  { key: "course_name", label: "Course" },
  { key: "exam", label: "Exam" },
  { key: "marks", label: "Marks", render: (r) => `${r.marks} / 100` },
  {
    key: "grade",
    label: "Grade",
    render: (r) => (
      <span className={`badge badge-${gradeTone(r.grade)}`}>{r.grade}</span>
    ),
  },
];

const fields = [
  {
    name: "student",
    label: "Student",
    type: "select",
    required: true,
    optionsEndpoint: "students",
    optionLabel: (s) => `${s.roll_number} - ${s.name}`,
  },
  {
    name: "course",
    label: "Course",
    type: "select",
    required: true,
    optionsEndpoint: "courses",
    optionLabel: (c) => `${c.code} - ${c.name}`,
  },
  { name: "exam", label: "Exam", required: true, placeholder: "e.g. Midterm" },
  {
    name: "marks",
    label: "Marks",
    type: "number",
    required: true,
    placeholder: "0 - 100",
    inputProps: { min: 0, max: 100 },
    validate: (v) => {
      const n = Number(v);
      return Number.isInteger(n) && n >= 0 && n <= 100
        ? ""
        : "Marks must be a whole number between 0 and 100";
    },
  },
];

const filters = [
  {
    name: "student",
    placeholder: "All students",
    optionsEndpoint: "students",
    optionLabel: (s) => `${s.roll_number} - ${s.name}`,
  },
  {
    name: "course",
    placeholder: "All courses",
    optionsEndpoint: "courses",
    optionLabel: (c) => `${c.code} - ${c.name}`,
  },
];

export default function Results() {
  return (
    <CrudPage
      title="Results"
      subtitle="Manage student results"
      endpoint="results"
      singular="Result"
      columns={columns}
      fields={fields}
      filters={filters}
      itemLabel={(r) => `${r.student_name} (${r.exam})`}
    />
  );
}