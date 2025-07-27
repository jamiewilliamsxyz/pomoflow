import { createContext, useState, useEffect } from "react";

export const SettingsContext = createContext();

const SettingsContextProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    focusLength: 25,
    shortBreakLength: 5,
    longBreakLength: 15,
    longBreakInterval: 4,
    autoStart: false,
    font: "Inter",
    notificationSound: "Default",
    notificationVolume: 50,
    notificationMessage: "Timer ended",
  });

  useEffect(() => {
    chrome.storage.sync.get(["settingsData"]).then((result) => {
      setSettings((prev) => ({
        ...prev,
        ...(result.settingsData || {}),
      }));
    });
  }, []);

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContextProvider;
