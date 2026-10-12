const variants = {
  info: "bg-blue-50 text-blue-600",
  success: "bg-emerald-50 text-emerald-600",
  warning: "bg-amber-50 text-amber-600",
};

export function Badge({ children, variant = "info" }) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider";

  const variantClasses = variants[variant] || variants.info;

  return (
    <span className={`${baseClasses} ${variantClasses}`}>
      {children}
    </span>
  );
}

export default Badge;