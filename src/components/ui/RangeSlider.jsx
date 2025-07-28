import { useContext } from "react";
import { SettingsContext } from "../../context/SettingsContext";

// Put formatTime in seperate file
const formatTime = (minutes) => {
  const mins = Math.floor(minutes);
  const secs = 0;
  const formattedMins = mins.toString().padStart(2, "0");
  const formattedSecs = secs.toString().padStart(2, "0");
  return `${formattedMins}:${formattedSecs}`;
};

export const RangeSlider = ({ settingName, setting, maxRange, minRange }) => {
  const { settings, setSettings } = useContext(SettingsContext);

  const handleChange = (e) => {
    setSettings({ ...settings, [setting]: Number(e.target.value) });
  };

  let displayValue;

  if (setting === "notificationVolume") {
    displayValue = `${settings[setting]}%`;
  } else if (setting === "longBreakInterval") {
    displayValue = settings[setting];
  } else {
    displayValue = formatTime(settings[setting]);
  }

  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-row justify-between">
        <label htmlFor={setting}>{settingName}</label>
        <p>{displayValue}</p>
      </div>

      <input
        type="range"
        id={setting}
        min={minRange}
        max={maxRange}
        value={settings[setting]}
        onChange={handleChange}
        className="range range-sm"
      />
    </div>
  );
};
