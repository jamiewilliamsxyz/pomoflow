import { useState } from "react";

export const RangeSlider = ({
  settingName,
  setting,
  maxRange,
  defaultValue,
}) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-row justify-between">
        <label htmlFor={setting}>{settingName}</label>
        <p>00:00</p>
      </div>

      <input
        type="range"
        id={setting}
        min={0}
        max={maxRange}
        value={value}
        onChange={(e) => {
          setValue(Number(e.target.value));
        }}
        className="range range-sm"
      />
    </div>
  );
};
