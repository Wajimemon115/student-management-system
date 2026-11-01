import { useId } from "react";

export default function FormSelect({
  label,
  error,
  options = [],
  placeholder = "Select...",
  id,
  ...props
}) {
  const autoId = useId();
  const selectId = id || autoId;

  return (
    <div className="form-group">
      {label && (
        <label className="form-label" htmlFor={selectId}>
          {label}
        </label>
      )}
      <select
        id={selectId}
        className="form-input"
        aria-invalid={error ? "true" : undefined}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {error && (
        <div className="form-error" role="alert">
          {error}
        </div>
      )}
    </div>
  );
}