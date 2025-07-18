import { Link } from "react-router-dom";

export const NavItem = ({ path, active, icon: Icon }) => {
  return (
    <Link
      to={path}
      className={`btn btn-ghost btn-square btn-sm ${
        active ? "text-primary" : "text-content"
      }`}
    >
      <Icon className="w-5.5 h-5.5" />
    </Link>
  );
};
