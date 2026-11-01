import CrudPage from "../components/CrudPage";

const columns = [
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "phone", label: "Phone", render: (r) => r.phone || "—" },
  { key: "subject", label: "Subject", render: (r) => r.subject || "—" },
];

const fields = [
  { name: "name", label: "Full Name", required: true, placeholder: "Enter full name" },
  { name: "email", label: "Email", type: "email", required: true, placeholder: "teacher@example.com" },
  { name: "phone", label: "Phone", placeholder: "03XX-XXXXXXX" },
  { name: "subject", label: "Subject", placeholder: "e.g. Chemistry" },
];

export default function Teachers() {
  return (
    <CrudPage
      title="Teachers"
      subtitle="Manage all teachers"
      endpoint="teachers"
      singular="Teacher"
      columns={columns}
      fields={fields}
    />
  );
}