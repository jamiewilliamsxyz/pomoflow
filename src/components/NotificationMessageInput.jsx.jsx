import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";

export const NotificationMessageInput = () => {
  const { settings, setSettings } = useContext(SettingsContext);

  return (
    <div>
      <label htmlFor="notificationMessage">Notification Message</label>
      <input
        type="text"
        id="notificationMessage"
        value={settings["notificationMessage"]}
        onChange={(e) =>
          setSettings({ ...settings, ["notificationMessage"]: e.target.value })
        }
        placeholder="Message"
        className="input focus:outline-0"
      />
    </div>
  );
};
