import Modal from "./Modal";
import Button from "./Button";

export default function ConfirmDialog({
  open,
  title = "Confirm delete",
  message,
  onConfirm,
  onCancel,
  loading,
}) {
  return (
    <Modal open={open} title={title} onClose={onCancel}>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>{message}</p>
      <div className="form-actions">
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="danger" onClick={onConfirm} disabled={loading}>
          {loading ? "Deleting..." : "Delete"}
        </Button>
      </div>
    </Modal>
  );
}