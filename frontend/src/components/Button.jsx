export default function Button({
  variant = "primary",
  size,
  children,
  ...props
}) {
  const classes = `btn btn-${variant} ${size === "sm" ? "btn-sm" : ""}`;
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}