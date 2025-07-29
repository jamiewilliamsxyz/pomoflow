// TIMER ENGINE

// Pull settings from storage
let currentSettings = null;

const getDefaultSettings = () => ({
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

const loadSettings = () => {
  chrome.storage.sync.get("settingsData", ({ settingsData }) => {
    currentSettings = settingsData || getDefaultSettings();
  });
};

chrome.runtime.onStartup.addListener(loadSettings);

loadSettings();

chrome.storage.onChanged.addListener((changes, areaName) => {
  if (areaName === "sync" && changes.settingsData) {
    currentSettings = changes.settingsData.newValue;
  }
});

// Background Timer State
chrome.runtime.onInstalled.addListener(() => {
  const settings = currentSettings || getDefaultSettings();

  chrome.storage.local.set({
    timerState: {
      phase: "focus",
      timeLeft: settings.focusLength * 60,
      isRunning: false,
      pomodoroCount: 0,
      startTime: null,
      endTime: null,
    },
  });
});

// Messages (communication with TimerContext)
chrome.runtime.onMessage.addListener((data) => {
  switch (data.event) {
    case "onStart":
      console.log("Background: start timer");
      break;
    case "onStop":
      console.log("Background: stop timer");
      break;
    case "onReset":
      console.log("Background: reset timer");
      break;
    case "onSkip":
      console.log("Background: skip timer");
      break;
    default:
      break;
  }
});
// Messages background needs to send back: onComplete (timer ended), onTick (broadcast each tick)

// STATS STUFF - IGNORE

/*
Some info for logging dates in the future:

(Use chrome storage sync)

const now = new Date();
const formattedDate = now.toLocaleString("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

Below is some mock data of dates when Pomodoros were completed with the lengths of the pomodoros
*/

export const dateLogs = [
  "10 Jun 2025, 8:22 AM -> 25m",
  "10 Jun 2025, 1:45 PM -> 25m",
  "10 Jun 2025, 6:30 PM -> 25m",
  "12 Jun 2025, 9:15 AM -> 25m",
  "12 Jun 2025, 3:50 PM -> 25m",
  "13 Jun 2025, 11:05 AM -> 25m",
  "13 Jun 2025, 7:12 PM -> 25m",
  "14 Jun 2025, 10:44 AM -> 25m",
  "14 Jun 2025, 2:30 PM -> 25m",
  "15 Jun 2025, 4:05 PM -> 25m",
  "15 Jun 2025, 8:18 PM -> 25m",
  "16 Jun 2025, 12:20 PM -> 25m",
  "17 Jun 2025, 9:55 AM -> 25m",
  "17 Jun 2025, 5:40 PM -> 25m",
  "18 Jun 2025, 3:10 PM -> 25m",
  "18 Jun 2025, 7:00 PM -> 25m",
  "19 Jun 2025, 11:25 AM -> 25m",
  "19 Jun 2025, 6:45 PM -> 25m",
];
