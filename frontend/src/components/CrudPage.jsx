import { useEffect, useState } from "react";
import api from "../api/axios";
import useCrud from "../hooks/useCrud";
import { useToast } from "../context/ToastContext";
import { parseApiErrors } from "../utils/errors";
import PageHeader from "./PageHeader";
import Table from "./Table";
import Button from "./Button";
import Modal from "./Modal";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import ConfirmDialog from "./ConfirmDialog";
import { useAuth } from "../context/AuthContext";
import TableSkeleton from "./TableSkeleton";

const PAGE_SIZE = 10;

export default function CrudPage({
  title,
  subtitle,
  endpoint,
  singular,
  columns,
  fields,
  filters = [],
  nameKey = "name",
  itemLabel,
}) {
  const notify = useToast();
  const { canWrite } = useAuth();
  const {
    items, count, page, setPage, loading, error, search,
    onSearch, create, update, remove, reload,
    filters: activeFilters, setFilter,
  } = useCrud(endpoint, PAGE_SIZE);

  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [options, setOptions] = useState({});

  // Load dropdown options for form fields and for toolbar filters
  useEffect(() => {
    const loaders = [
      ...fields
        .filter((f) => f.optionsEndpoint)
        .map((f) => ({ key: f.name, cfg: f })),
      ...filters.map((f) => ({ key: `filter:${f.name}`, cfg: f })),
    ];

    loaders.forEach(({ key, cfg }) => {
      api
        .get(`/${cfg.optionsEndpoint}/`, { params: { page_size: 100 } })
        .then((res) =>
          setOptions((o) => ({
            ...o,
            [key]: res.data.results.map((item) => ({
              value: item.id,
              label: cfg.optionLabel(item),
            })),
          }))
        )
        .catch(() => {});
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const emptyForm = () =>
    fields.reduce((acc, f) => ({ ...acc, [f.name]: "" }), {});

  const openAdd = () => {
    setEditing(null);
    setForm(emptyForm());
    setErrors({});
    setModalOpen(true);
  };

  const openEdit = (row) => {
    setEditing(row);
    setForm(
      fields.reduce((acc, f) => ({ ...acc, [f.name]: row[f.name] ?? "" }), {})
    );
    setErrors({});
    setModalOpen(true);
  };

  const handleChange = (name, value) => {
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }));
  };

  const validate = () => {
    const errs = {};
    fields.forEach((f) => {
      const value = String(form[f.name] ?? "").trim();
      if (f.required && !value) {
        errs[f.name] = `${f.label} is required`;
      } else if (value && f.validate) {
        const msg = f.validate(value);
        if (msg) errs[f.name] = msg;
      }
    });
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    const payload = {};
    fields.forEach((f) => {
      let value = form[f.name];
      if (value === "" && (f.type === "select" || f.type === "date")) value = null;
      payload[f.name] = value;
    });

    setSaving(true);
    try {
      if (editing) {
        await update(editing.id, payload);
        notify(`${singular} updated`);
      } else {
        await create(payload);
        notify(`${singular} added`);
      }
      setModalOpen(false);
    } catch (err) {
      const apiErrors = parseApiErrors(err);
      setErrors(apiErrors);
      notify(
        Object.keys(apiErrors).length
          ? "Please fix the errors in the form"
          : "Something went wrong",
        "error"
      );
    } finally {
      setSaving(false);
    }
  };

  const confirmDelete = async () => {
    setDeleteLoading(true);
    try {
      await remove(deleting.id);
      notify(`${singular} deleted`);
      setDeleting(null);
    } catch {
      notify(`Could not delete ${singular.toLowerCase()}`, "error");
    } finally {
      setDeleteLoading(false);
    }
  };

  const actionsColumn = {
    key: "actions",
    label: "Actions",
    render: (row) => (
      <div className="row-actions">
        <Button variant="secondary" size="sm" onClick={() => openEdit(row)}>
          Edit
        </Button>
        <Button variant="danger" size="sm" onClick={() => setDeleting(row)}>
          Delete
        </Button>
      </div>
    ),
  };

  const allColumns = canWrite ? [...columns, actionsColumn] : columns;

  const renderField = (f) => {
    const common = {
      label: f.label,
      value: form[f.name] ?? "",
      error: errors[f.name],
      onChange: (e) => handleChange(f.name, e.target.value),
    };

    if (f.type === "select") {
      return (
        <FormSelect key={f.name} {...common} options={options[f.name] || []} />
      );
    }
    if (f.type === "textarea") {
      return (
        <FormInput
          key={f.name}
          {...common}
          as="textarea"
          rows={3}
          placeholder={f.placeholder}
        />
      );
    }

    const isFiltered =
      Boolean(search) || Object.values(activeFilters).some(Boolean);

    const emptyText = isFiltered
      ? "No records found. Try a different search or filter."
      : canWrite
      ? `No ${title.toLowerCase()} yet. Click "+ Add ${singular}" to create the first one.`
      : `No ${title.toLowerCase()} to show yet.`;

    return (
      <FormInput
        key={f.name}
        {...common}
        type={f.type || "text"}
        placeholder={f.placeholder}
        {...f.inputProps}
      />
    );
  };

  const deleteLabel = deleting
    ? itemLabel
      ? itemLabel(deleting)
      : deleting[nameKey]
    : "";

  return (
    <>
      <PageHeader title={title} subtitle={subtitle}>
        {canWrite && <Button onClick={openAdd}>+ Add {singular}</Button>}
      </PageHeader>

      <div className="card">
        <div className="toolbar">
          <SearchBar
            onChange={onSearch}
            placeholder={`Search ${title.toLowerCase()}...`}
          />
          {filters.map((f) => (
            <select
              key={f.name}
              className="form-input filter-select"
              value={activeFilters[f.name] ?? ""}
              onChange={(e) => setFilter(f.name, e.target.value)}
            >
              <option value="">{f.placeholder}</option>
              {(options[`filter:${f.name}`] || []).map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          ))}
        </div>

        {error ? (
          <div className="error-box">
            <span>{error}</span>
            <Button variant="danger" size="sm" onClick={reload}>
              Retry
            </Button>
          </div>
        ) : loading && items.length === 0 ? (
          <TableSkeleton columns={Math.min(allColumns.length, 5)} />
        ) : (
          <div className={loading ? "dimmed" : ""}>
            <Table columns={allColumns} data={items} emptyText={emptyText} />
          </div>
        )}

        <Pagination
          page={page}
          count={count}
          pageSize={PAGE_SIZE}
          onPageChange={setPage}
        />
      </div>

      <Modal
        open={modalOpen}
        title={editing ? `Edit ${singular}` : `Add ${singular}`}
        onClose={() => setModalOpen(false)}
      >
        <form onSubmit={handleSubmit} noValidate>
          {errors.non_field_errors && (
            <div className="form-error" style={{ marginBottom: 12 }}>
              {errors.non_field_errors}
            </div>
          )}
          {fields.map(renderField)}
          <div className="form-actions">
            <Button
              type="button"
              variant="secondary"
              onClick={() => setModalOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={saving}>
              {saving ? "Saving..." : "Save"}
            </Button>
          </div>
        </form>
      </Modal>

      <ConfirmDialog
        open={!!deleting}
        message={`Are you sure you want to delete "${deleteLabel}"? This cannot be undone.`}
        onConfirm={confirmDelete}
        onCancel={() => setDeleting(null)}
        loading={deleteLoading}
      />
    </>
  );
}