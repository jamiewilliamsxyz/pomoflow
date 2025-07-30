// TIMER ENGINE

let currentSettings = null;

// Define the fallback if there is no settings set
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

// Load settings function to get the settings, if none set currentSettings to the fallback
const loadSettings = () => {
  chrome.storage.sync.get("settingsData", ({ settingsData }) => {
    currentSettings = settingsData || getDefaultSettings();
  });
};

// When extension first starts up, load the settings
chrome.runtime.onStartup.addListener(loadSettings);

// Loads the settings when the background loads
loadSettings();

// Listening for changes in storage
chrome.storage.onChanged.addListener((changes, areaName) => {
  // Handle updated settings
  if (areaName === "sync" && changes.settingsData) {
    currentSettings = changes.settingsData.newValue;
  }

  // Handle phase change in timer state
  if (
    areaName === "local" &&
    changes.timerStateData?.oldValue?.phase !==
      changes.timerStateData?.newValue?.phase
  ) {
    const newPhase = changes.timerStateData.newValue.phase;

    if (newPhase === "longBreak") {
      updateTimerState("pomodoroCount", 0);
    }
  }
});

// Setting background timer state
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get("timerStateData", (result) => {
    if (!result.timerStateData) {
      const timerState = {
        phase: "focus",
        timeLeft:
          (currentSettings?.focusLength ?? getDefaultSettings().focusLength) *
          60,
        isRunning: false,
        pomodoroCount: 0,
        startTime: null,
        endTime: null,
      };

      chrome.storage.local.set({ timerStateData: timerState });
    }
  });
});

// Function to update part of timerState
const updateTimerState = (property, updatedValue) => {
  chrome.storage.local.get("timerStateData", ({ timerStateData = {} }) => {
    timerStateData[property] = updatedValue;
    chrome.storage.local.set({ timerStateData });
  });
};

// Function to get part of timerState
const getTimerState = async (property) => {
  const result = await chrome.storage.local.get("timerStateData");
  const timerStateData = result.timerStateData;
  const propertyValue = timerStateData?.[property];
  return propertyValue;
};

// Alarm Functions
const createAlarm = (alarmLength) => {
  chrome.alarms.get("Timer", (existingAlarm) => {
    if (!existingAlarm) {
      chrome.alarms.create("Timer", { periodInMinutes: alarmLength });
    }
  });
};

const removeAlarm = () => {
  chrome.alarms.clearAll();
};

chrome.alarms.onAlarm.addListener(() => {
  console.log("Alarm code is running, timer has is finished");
});

// Timer Control Functions
const handlePhaseChange = async (updatedPhase) => {
  const currentPhase = await getTimerState("phase");

  if (updatedPhase === currentPhase) {
    return;
  }

  await stopRunningTimer();

  updateTimerState("phase", updatedPhase);

  // Updating & resetting timeLeft to match the new phases default time in settings
  let updatedTimeLeft = null;

  if (updatedPhase === "focus") {
    updatedTimeLeft = currentSettings.focusLength * 60;
  } else if (updatedPhase === "shortBreak") {
    updatedTimeLeft = currentSettings.shortBreakLength * 60;
  } else if (updatedPhase === "longBreak") {
    updatedTimeLeft = currentSettings.longBreakLength * 60;
  }

  updateTimerState("timeLeft", updatedTimeLeft);
};

const handleOnStart = () => {
  updateTimerState("isRunning", true);
  const alarmLength = currentSettings.focusLength; // Set to timeLeft instead, need to get from storage
  createAlarm(alarmLength);
};

const handleOnStop = () => {
  updateTimerState("isRunning", false);
  // Need to pause and save timeLeft
  removeAlarm();
};

const stopRunningTimer = async () => {
  const isRunning = await getTimerState("isRunning");
  if (isRunning) {
    handleOnStop();
  }
};

const handleOnReset = async () => {
  // Stop the timer if it's running
  await stopRunningTimer();

  // Reset timeLeft to the current phases length set in settings
  let currentPhaseLength = null;
  const currentPhase = await getTimerState("phase");

  if (currentPhase === "focus") {
    currentPhaseLength = currentSettings.focusLength * 60;
  } else if (currentPhase === "shortBreak") {
    currentPhaseLength = currentSettings.shortBreakLength * 60;
  } else if (currentPhase === "longBreak") {
    currentPhaseLength = currentSettings.longBreakLength * 60;
  }

  // If the timer has already reset, return
  const currentTimeLeft = await getTimerState("timeLeft");
  if (currentTimeLeft === currentPhaseLength) {
    return;
  }

  updateTimerState("timeLeft", currentPhaseLength);
};

const setNewTimer = (newPhase, newTimeLeft) => {
  updateTimerState("phase", newPhase);
  updateTimerState("timeLeft", newTimeLeft);
};

const handleOnSkip = async () => {
  // Stop timer if it's running and if auto start is off
  if (!currentSettings.autoStart) {
    stopRunningTimer();
  }

  const currentPhase = await getTimerState("phase");
  const currentPomodoroCount = await getTimerState("pomodoroCount");

  if (currentPhase === "focus") {
    // Add 1 to pomodoroCount since the phase being skipped is focus
    updateTimerState("pomodoroCount", currentPomodoroCount + 1);

    // Decide to skip to either short or long break based on the pomodoroCount and longBreakInterval
    // + 1 since state is not immediately updated
    if (currentPomodoroCount + 1 === currentSettings.longBreakInterval) {
      setNewTimer("longBreak", currentSettings.longBreakLength * 60);
    } else {
      setNewTimer("shortBreak", currentSettings.shortBreakLength * 60);
    }
  } else {
    // If the phase isn't focus, it's a break, skip to focus timer
    setNewTimer("focus", currentSettings.focusLength * 60);
  }
};

// Messages (communication with TimerContext)
chrome.runtime.onMessage.addListener((data) => {
  switch (data.event) {
    case "onStart":
      handleOnStart();
      break;
    case "onStop":
      handleOnStop();
      break;
    case "onReset":
      handleOnReset();
      break;
    case "onSkip":
      handleOnSkip();
      break;
    case "onPhaseChange":
      handlePhaseChange(data.updatedPhase);
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
