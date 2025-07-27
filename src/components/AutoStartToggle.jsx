import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";

export const AutoStartToggle = () => {
  const { settings, setSettings } = useContext(SettingsContext);

  let displayValue;

  if (settings["autoStart"] === true) {
    displayValue = "On";
  } else if (settings["autoStart"] === false) {
    displayValue = "Off";
  } else {
    displayValue = "Error";
  }

  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-row justify-between">
        <label htmlFor="autoStart">Auto Start Timers</label>
        <p>{displayValue}</p>
      </div>

      <input
        type="checkbox"
        id="autoStart"
        checked={settings["autoStart"]}
        onChange={(e) =>
          setSettings((prev) => ({ ...prev, autoStart: !prev.autoStart }))
        }
        className="toggle"
      />
    </div>
  );
};
