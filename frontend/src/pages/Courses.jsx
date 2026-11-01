import CrudPage from "../components/CrudPage";

const columns = [
  { key: "code", label: "Code" },
  { key: "name", label: "Course Name" },
  { key: "duration", label: "Duration", render: (r) => r.duration || "—" },
  { key: "teacher_name", label: "Teacher", render: (r) => r.teacher_name || "—" },
];

const fields = [
  { name: "name", label: "Course Name", required: true, placeholder: "e.g. Chemistry" },
  { name: "code", label: "Course Code", required: true, placeholder: "e.g. CHEM101" },
  { name: "duration", label: "Duration", placeholder: "e.g. 3 years" },
  {
    name: "teacher",
    label: "Teacher",
    type: "select",
    optionsEndpoint: "teachers",
    optionLabel: (t) => t.name,
  },
];

export default function Courses() {
  return (
    <CrudPage
      title="Courses"
      subtitle="Manage all courses"
      endpoint="courses"
      singular="Course"
      columns={columns}
      fields={fields}
    />
  );
}