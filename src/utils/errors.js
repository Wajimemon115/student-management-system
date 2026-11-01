export function parseApiErrors(err) {
  const data = err.response?.data;
  const out = {};
  if (data && typeof data === "object") {
    Object.entries(data).forEach(([key, value]) => {
      out[key] = Array.isArray(value) ? value.join(" ") : String(value);
    });
  }
  return out;
}