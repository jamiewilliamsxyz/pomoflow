import { useLocation } from "react-router-dom";
import { NavItem } from "./ui/NavItem";

import { Timer, ListTodo, StickyNote, BarChart3, Settings } from "lucide-react";

const navItems = [
  { name: "Timer", path: "/", icon: Timer },
  { name: "Tasks", path: "/tasks", icon: ListTodo },
  { name: "Notes", path: "/notes", icon: StickyNote },
  { name: "Stats", path: "/stats", icon: BarChart3 },
  { name: "Settings", path: "/settings", icon: Settings },
];

export const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar bg-base-200 shadow-sm px-4">
      <div className="flex-1 flex gap-4">
        {navItems.slice(0, 3).map(({ name, path, icon }) => (
          <NavItem
            key={name}
            path={path}
            icon={icon}
            active={location.pathname === path}
          />
        ))}
      </div>
      <div className="flex-none flex gap-4">
        {navItems.slice(3, 5).map(({ name, path, icon }) => (
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
