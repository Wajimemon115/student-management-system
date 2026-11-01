import CrudPage from "../components/CrudPage";

const columns = [
  { key: "roll_number", label: "Roll No" },
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "course_name", label: "Course", render: (r) => r.course_name || "—" },
  { key: "phone", label: "Phone", render: (r) => r.phone || "—" },
];

const fields = [
  { name: "name", label: "Full Name", required: true, placeholder: "Enter full name" },
  { name: "roll_number", label: "Roll Number", required: true, placeholder: "e.g. S-004" },
  { name: "email", label: "Email", type: "email", required: true, placeholder: "student@example.com" },
  { name: "phone", label: "Phone", placeholder: "03XX-XXXXXXX" },
  { name: "date_of_birth", label: "Date of Birth", type: "date" },
  {
    name: "course",
    label: "Course",
    type: "select",
    optionsEndpoint: "courses",
    optionLabel: (c) => `${c.code} - ${c.name}`,
  },
  { name: "address", label: "Address", type: "textarea", placeholder: "Enter address" },
];

export default function Students() {
  return (
    <CrudPage
      title="Students"
      subtitle="Manage all students"
      endpoint="students"
      singular="Student"
      columns={columns}
      fields={fields}
    />
  );
}