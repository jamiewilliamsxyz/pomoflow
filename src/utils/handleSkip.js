// REFACTOR

export const handleSkip = () => {
  // Send message
  if (currentTimer.id === "pomodoro") {
    if (lbIntervals.includes(currentPomodoro)) {
      setCurrentTimer(timers[2]);
      setTimeLeft(timers[2].length * 60);
    } else {
      setCurrentTimer(timers[1]);
      setTimeLeft(timers[1].length * 60);
    }
  } else {
    setCurrentTimer(timers[0]);
    setTimeLeft(timers[0].length * 60);
    setCurrentPomodoro((prev) => prev + 1);
  }

  setTimerActive(false);
};
