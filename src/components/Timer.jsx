import { useState, useEffect } from "react";
import { Button } from "../components/ui/Button";
import { IconButton } from "../components/ui/IconButton";
import skipIcon from "../assets/icons/skip.svg";

export const Timer = () => {
  // Temporary user data
  const timerLengths = [
    { name: "pomodoro", length: 25 },
    { name: "shortBreak", length: 5 },
    { name: "longBreak", length: 15 },
  ];

  const longBreakIntervalLength = 4;

  const [pomodorosComplete, setPomodorosComplete] = useState(0);

  // Format Time
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${
      remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds
    }`;
  };

  // Timer
  const [timerActive, setTimerActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(timerLengths[0].length * 60);
  const [displayTime, setDisplayTime] = useState("25:00");

  useEffect(() => {
    if (!timerActive) return;

    const updateCountdown = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(updateCountdown);
          setPomodorosComplete((prev) => prev + 1);
          return 0;
        }
        setDisplayTime(formatTime(prev - 1));
        return prev - 1;
      });
      // Add breaks (short/long) and intervals, pomodorosComplete updates when timer hits 0 already
      // Add to chrome storage, but maybe use useReducer and useContext and split this up?
    }, 1000);

    return () => clearInterval(updateCountdown);
  }, [timerActive]);

  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="font-medium text-6xl bg-base-300 p-6 rounded-xl">
        {displayTime}
      </h2>
      <div className="flex flex-row gap-3 items-center">
        <Button
          onClick={() => {
            setTimerActive((prev) => !prev);
          }}
        >
          {timerActive ? <span>Pause</span> : <span>Start</span>}
        </Button>
        <IconButton>
          <img src={skipIcon} width="24" height="24" alt="Skip"></img>
        </IconButton>
      </div>
    </div>
  );
};
