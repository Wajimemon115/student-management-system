import { useId } from "react";

export default function FormInput({ label, error, as = "input", id, ...props }) {
  const autoId = useId();
  const inputId = id || autoId;
  const Tag = as;

  return (
    <div className="form-group">
      {label && (
        <label className="form-label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <Tag
        id={inputId}
        className="form-input"
        aria-invalid={error ? "true" : undefined}
        {...props}
      />
      {error && (
        <div className="form-error" role="alert">
          {error}
        </div>
      )}
    </div>
  );
}