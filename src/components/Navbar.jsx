import { useLocation } from "react-router-dom";
import { NavItem } from "./ui/NavItem";

import TimerIcon from "../assets/icons/timer.svg";
import TasksIcon from "../assets/icons/tasks.svg";
import NotesIcon from "../assets/icons/notes.svg";
import CustomiseIcon from "../assets/icons/customise.svg";
import SettingsIcon from "../assets/icons/settings.svg";

const leftNavItems = [
  { name: "Timer", path: "/", icon: TimerIcon },
  { name: "Tasks", path: "/tasks", icon: TasksIcon },
  { name: "Notes", path: "/notes", icon: NotesIcon },
];

const rightNavItems = [
  { name: "Customise", path: "/customise", icon: CustomiseIcon },
  { name: "Settings", path: "/settings", icon: SettingsIcon },
];

export const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      <div className="flex-1 flex gap-2">
        {leftNavItems.map(({ name, path, icon }) => (
          <NavItem
            key={name}
            path={path}
            icon={icon}
            active={location.pathname === path}
            ariaLabel={name}
          />
        ))}
      </div>
      <div className="flex-none flex gap-2">
        {rightNavItems.map(({ name, path, icon }) => (
          <NavItem
            key={name}
            path={path}
            icon={icon}
            active={location.pathname === path}
            ariaLabel={name}
          />
        ))}
      </div>
    </div>
  );
};
