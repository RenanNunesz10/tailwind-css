export function NavLink({ href, active = false, children }) {
  return (
    <a
      href={href}
      className={`text-sm transition-colors ${
        active
          ? "font-extrabold text-slate-900"
          : "font-medium text-slate-500 hover:text-slate-900"
      }`}
    >
      {children}
    </a>
  );
}

export default NavLink;