import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";
import { PageLayout } from "../components/PageLayout";
import { RangeSlider } from "../components/ui/RangeSlider";
import { SelectBox } from "../components/ui/SelectBox";
import { ThemeSelect } from "../components/ThemeSelect";
import { NotificationMessageInput } from "../components/NotificationMessageInput.jsx";
import { SaveButton } from "../components/ui/SaveButton";

export const Settings = () => {
  const { settings } = useContext(SettingsContext);

  const handleSave = () => {
    chrome.storage.sync.set({ settingsData: settings });
  };

  return (
    <PageLayout>
      <div className="flex flex-col items-center gap-4 mt-2">
        <h2 className="font-semibold text-xl text-center">Pomodoro Settings</h2>

        <div className="text-[16px] w-[320px] flex flex-col gap-5 bg-base-200 p-4 rounded-lg shadow-sm">
          <RangeSlider
            settingName="Pomodoro Length"
            setting="pomodoroLength"
            maxRange="90"
            minRange="1"
          />
          <RangeSlider
            settingName="Short Break Length"
            setting="shortBreakLength"
            maxRange="30"
            minRange="1"
          />
          <RangeSlider
            settingName="Long Break Length"
            setting="longBreakLength"
            maxRange="60"
            minRange="1"
          />
          <RangeSlider
            settingName="Long Break Interval"
            setting="longBreakInterval"
            maxRange="8"
            minRange="1"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <h2 className="font-semibold text-xl text-center">
          Customisation Settings
        </h2>

        <div className="text-[16px] w-[320px] flex flex-col gap-5 bg-base-200 p-4 rounded-lg shadow-sm">
          <ThemeSelect />
          <SelectBox
            settingName="Font"
            setting="font"
            options={[
              "Default",
              "Roboto",
              "Open Sans",
              "Merriweather",
              "Fire Code",
            ]}
          />
          <SelectBox
            settingName="Notification Sound"
            setting="notificationSound"
            options={["Default", "Error", "Info", "Ping", "Success", "Welcome"]}
          />
          <RangeSlider
            settingName="Notification Volume"
            setting="notificationVolume"
            maxRange="100"
            minRange="0"
          />
          <NotificationMessageInput />
        </div>
      </div>
      <SaveButton onClick={handleSave} colour="success">
        Save
      </SaveButton>
    </PageLayout>
  );
};
