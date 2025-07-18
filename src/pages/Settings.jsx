import { PageLayout } from "../components/PageLayout";
import { RangeSlider } from "../components/ui/RangeSlider";
import { SelectBox } from "../components/ui/SelectBox";
import { ThemeSelect } from "../components/ThemeSelect";
import { NotificationMessageInput } from "../components/NotificationMessageInput.jsx";
import { Button } from "../components/ui/Button";

export const Settings = () => {
  const handleSave = () => {};

  return (
    <PageLayout pageTitle="Settings">
      <div className="flex flex-col items-center gap-4 mt-2">
        <h2 className="font-semibold text-xl text-center">Pomodoro Settings</h2>

        <div className="text-[16px] w-[320px] flex flex-col gap-5 bg-base-200 p-4 rounded-lg shadow-sm">
          <RangeSlider
            settingName="Pomodoro Length"
            setting="pomodoroLength"
            maxRange="60"
            defaultValue="25"
          />
          <RangeSlider
            settingName="Short Break Length"
            setting="ShortBreakLength"
            maxRange="60"
            defaultValue="5"
          />
          <RangeSlider
            settingName="Long Break Length"
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

      <div className="flex flex-col gap-4 mt-4">
        <h2 className="font-semibold text-xl text-center">
          Customisation Settings
        </h2>

        <div className="text-[16px] w-[320px] flex flex-col gap-5 bg-base-200 p-4 rounded-lg shadow-sm">
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
            settingName="Notification Volume"
            setting="notificationVolume"
            maxRange="100"
            value="50"
          />
          <NotificationMessageInput />
        </div>
      </div>
      <Button onClick={handleSave}>Save</Button>
    </PageLayout>
  );
};
