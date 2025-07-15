import { PageLayout } from "../components/PageLayout";
import { RangeSlider } from "../components/ui/RangeSlider";
import { SelectBox } from "../components/ui/SelectBox";
import { ThemeSelect } from "../components/ThemeSelect";
import { NotificationMessageInput } from "../components/NotificationMessageInput.jsx";
import { Button } from "../components/ui/Button";

// Settings context needed, useReduce?
// Storage sync needed
// Set values to the state

export const Settings = () => {
  const handlePomodoroSave = () => {};
  const handleCustomisationSave = () => {};

  return (
    <PageLayout pageTitle="Settings">
      <div className="flex flex-col items-center gap-4 mt-2">
        <h2 className="font-semibold text-xl text-center">Pomodoro Settings</h2>

        <div className="w-[320px] flex flex-col gap-5 bg-base-200 p-4 rounded-lg shadow-sm">
          <RangeSlider
            settingName="Pomodoro Length (minutes)"
            setting="pomodoroLength"
            maxRange="60"
            defaultValue="25"
          />
          <RangeSlider
            settingName="Short Break Length (minutes)"
            setting="ShortBreakLength"
            maxRange="60"
            defaultValue="5"
          />
          <RangeSlider
            settingName="Long Break Length (minutes)"
            setting="LongBreakLength"
            maxRange="60"
            defaultValue="15"
          />
          <RangeSlider
            settingName="Long Break Interval"
            setting="longBreakInterval"
            maxRange="10"
            defaultValue="4"
          />
        </div>
      </div>
      <Button onClick={handlePomodoroSave}>Save</Button>

      <div className="flex flex-col gap-4 mt-4">
        <h2 className="font-semibold text-xl text-center">
          Customisation Settings
        </h2>

        <div className="flex flex-col gap-5 bg-base-200 p-4 rounded-lg shadow-sm">
          <ThemeSelect />
          <SelectBox
            settingName="Font"
            settingAction="Select a font"
            setting="font"
          />
          <SelectBox
            settingName="Notification"
            settingAction="Select a notification sound"
            setting="notification"
          />
          <RangeSlider
            settingName="Notification Sound"
            setting="notificationSound"
            maxRange="100"
            value="50"
          />
          <NotificationMessageInput />
        </div>
      </div>
      <Button onClick={handleCustomisationSave}>Save</Button>
    </PageLayout>
  );
};
