import { Link } from "react-router-dom";

export const NavItem = ({ path, active, icon }) => {
  return (
    <Link
      to={path}
      className={`btn btn-ghost btn-square btn-md ${
        active ? "bg-base-300 text-primary-content" : ""
      }`}
    >
      <span className="text-[20px]">{icon}</span>
    </Link>
  );
};
