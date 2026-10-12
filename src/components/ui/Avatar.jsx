const variants = {
  blue: "bg-blue-600 text-white",
  violet: "bg-violet-600 text-white",
  green: "bg-emerald-600 text-white",
};

const sizes = {
  sm: "h-10 w-10 text-sm",
  md: "h-14 w-14 text-lg", // 56x56px (tamanho base)
  lg: "h-16 w-16 text-xl",
};

export function Avatar({
  initials,
  variant = "blue",
  size = "md",
}) {
  const baseClasses =
    "inline-flex shrink-0 items-center justify-center rounded-full font-extrabold tracking-tight select-none";

  const variantClasses = variants[variant] || variants.blue;
  const sizeClasses = sizes[size] || sizes.md;

  return (
    <div className={`${baseClasses} ${sizeClasses} ${variantClasses}`}>
      {initials}
    </div>
  );
}

export default Avatar;