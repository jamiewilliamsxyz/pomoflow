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
      <label htmlFor={setting}>{settingName}</label>
      <input
        type="range"
        id={setting}
        min={0}
        max={maxRange}
        value={value}
        onChange={(e) => {
          setValue(Number(e.target.value));
        }}
        className="range"
      />
    </div>
  );
};
