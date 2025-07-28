import { createContext, useContext, useState, useEffect } from "react";
import { SettingsContext } from "./SettingsContext";

export const TimerContext = createContext();

const TimerContextProvider = ({ children }) => {
  const { settings } = useContext(SettingsContext);

  const [timerState, setTimerState] = useState({
    phase: "focus",
    timeLeft: settings.focusLength * 60,
    isRunning: false,
    pomodoroCount: 0,
  });

  // pomodoroCount is being used to start a long break when it hits 4, hence it needs to reset when the phase is a long break
  useEffect(() => {
    if (timerState.phase === "longBreak") {
      setTimerState((prev) => ({
        ...prev,
        pomodoroCount: 0,
      }));
    }
  }, [timerState.phase]);

  const handlePhaseChange = (updatedPhase) => {
    // Don't want to update the context and update/reset timeLeft if the user clicks on the same phase tab twice
    if (updatedPhase === timerState.phase) {
      return;
    }

    setTimerState((prev) => ({ ...prev, phase: updatedPhase }));

    // Updating & resetting timeLeft to match the new phases default time in settings
    let updatedTimeLeft;

    if (updatedPhase === "focus") {
      updatedTimeLeft = settings.focusLength * 60;
    } else if (updatedPhase === "shortBreak") {
      updatedTimeLeft = settings.shortBreakLength * 60;
    } else if (updatedPhase === "longBreak") {
      updatedTimeLeft = settings.longBreakLength * 60;
    }

    setTimerState((prev) => ({ ...prev, timeLeft: updatedTimeLeft }));
  };

  const handleIsRunning = () => {
    setTimerState((prev) => ({ ...prev, isRunning: !prev.isRunning }));
  };

  const stopRunningTimer = () => {
    if (timerState.isRunning) {
      handleIsRunning();
    }
  };

  const setNewTimer = (newPhase, newTimeLeft) => {
    setTimerState((prev) => ({
      ...prev,
      phase: newPhase,
      timeLeft: newTimeLeft,
    }));
  };

  const handleSkip = () => {
    // Stop timer if it's running and if auto start is off
    if (!settings.autoStart) {
      stopRunningTimer();
    }

    if (timerState.phase === "focus") {
      // Add 1 to pomodoroCount since the phase being skipped is focus
      setTimerState((prev) => ({
        ...prev,
        pomodoroCount: prev.pomodoroCount + 1,
      }));

      // Decide to skip to either short or long break based on the pomodoroCount and longBreakInterval
      // + 1 since state is not immediately updated
      if (timerState.pomodoroCount + 1 === settings.longBreakInterval) {
        setNewTimer("longBreak", settings.longBreakLength * 60);
      } else {
        setNewTimer("shortBreak", settings.shortBreakLength * 60);
      }
    } else {
      // If the phase isn't focus, it's a break, skip to focus timer
      setNewTimer("focus", settings.focusLength * 60);
    }
  };

  const handleReset = () => {
    stopRunningTimer();

    // Reset timeLeft to the current phases length set in settings
    let currentPhaseLength;

    if (timerState.phase === "focus") {
      currentPhaseLength = settings.focusLength * 60;
    } else if (timerState.phase === "shortBreak") {
      currentPhaseLength = settings.shortBreakLength * 60;
    } else if (timerState.phase === "longBreak") {
      currentPhaseLength = settings.longBreakLength * 60;
    }

    setTimerState((prev) => ({ ...prev, timeLeft: currentPhaseLength }));
  };

  return (
    <TimerContext.Provider
      value={{
        timerState,
        handlePhaseChange,
        handleIsRunning,
        handleSkip,
        handleReset,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export default TimerContextProvider;
