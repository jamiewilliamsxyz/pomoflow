import { useEffect } from "react";
import { themeChange } from "theme-change";

export const ThemeSelect = () => {
  const themes = [
    "light",
    "cupcake",
    "bumblebee",
    "synthwave",
    "retro",
    "cyberpunk",
    "forest",
    "aqua",
    "pastel",
    "dracula",
    "winter",
    "nord",
  ];

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="themeSelect">Theme</label>
      <select
        data-choose-theme
        defaultValue="Select a theme"
        className="select hover:outline-0 active:outline-0 focus:outline-0"
        id="themeSelect"
      >
        <option value="">Default</option>
        {themes.map((theme) => (
          <option key={theme} value={theme}>
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </option>
        ))}
        ;
      </select>
    </div>
  );
};
