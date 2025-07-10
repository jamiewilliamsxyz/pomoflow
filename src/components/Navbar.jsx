import { useLocation } from "react-router-dom";
import { NavItem } from "./ui/NavItem";

const leftNavItems = [
  { name: "Timer", path: "/", icon: "⏳" },
  { name: "Tasks", path: "/tasks", icon: "🗂️" },
  { name: "Notes", path: "/notes", icon: "📝" },
];

const rightNavItems = [
  { name: "Stats", path: "/stats", icon: "📊" },
  { name: "Settings", path: "/settings", icon: "⚙️" },
];

export const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar shadow-sm px-4">
      <div className="flex-1 flex gap-4">
        {leftNavItems.map(({ name, path, icon }) => (
          <NavItem
            key={name}
            path={path}
            icon={icon}
            active={location.pathname === path}
          />
        ))}
      </div>
      <div className="flex-none flex gap-4">
        {rightNavItems.map(({ name, path, icon }) => (
          <NavItem
            key={name}
            path={path}
            icon={icon}
            active={location.pathname === path}
          />
        ))}
      </div>
    </div>
  );
};
