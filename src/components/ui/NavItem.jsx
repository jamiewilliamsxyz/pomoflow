import { Link } from "react-router-dom";

const NavItem = ({ path, active, ariaLabel, icon }) => {
  return (
    <Link
      to={path}
      aria-label={ariaLabel}
      className={`btn btn-ghost btn-square btn-sm ${
        active ? "bg-primary text-primary-content" : ""
      }`}
    >
      <img src={icon} alt={`${ariaLabel} icon`} className="w-5 h-5" />
    </Link>
  );
};

export default NavItem;
