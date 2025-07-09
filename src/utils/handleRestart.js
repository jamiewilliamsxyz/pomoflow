// REFACTOR

const handleRestart = () => {
  // Send message
  setTimerActive(false);
  setTimeLeft(currentTimer.length * 60);
};
