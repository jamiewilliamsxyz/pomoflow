import { useContext } from "react";
import { SettingsContext } from "../../context/SettingsContext";

export const SelectBox = ({ settingName, setting, options = [] }) => {
  const { settings, setSettings } = useContext(SettingsContext);

  return (
    <div>
      <label htmlFor={setting}>{settingName}</label>
      <select
        id={setting}
        value={settings[setting]}
        onChange={(e) =>
          setSettings({ ...settings, [setting]: e.target.value })
        }
        className="select"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
