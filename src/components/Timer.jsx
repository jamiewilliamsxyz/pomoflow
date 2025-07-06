import { useState, useEffect, useMemo } from "react";
import { Button } from "../components/ui/Button";
import { IconButton } from "../components/ui/IconButton";
import skipIcon from "../assets/icons/skip.svg";
import restartIcon from "../assets/icons/restart.svg";

export const Timer = () => {
  const timers = [
    { id: "pomodoro", displayName: "Pomodoro", length: 25 },
    { id: "shortBreak", displayName: "Short Break", length: 5 },
    { id: "longBreak", displayName: "Long Break", length: 15 },
  ];

  const [lbIntervalLength, setLbIntervalLength] = useState(4);

  // Move this to settings
  const calculateLbIntervals = (lbIntervalLength) => {
    const result = [];
    for (let i = 1; i < 99; i++) {
      let intervalEntry = lbIntervalLength * i;
      result.push(intervalEntry);
    }
    return result;
  };

  const lbIntervals = useMemo(
    () => calculateLbIntervals(lbIntervalLength),
    [lbIntervalLength]
  );

  const [currentPomodoro, setCurrentPomodoro] = useState(1);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${
      remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds
    }`;
  };

  const [timerActive, setTimerActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(timers[0].length * 60);
  const [currentTimer, setCurrentTimer] = useState(timers[0]);
  const [displayTime, setDisplayTime] = useState("25:00");

  useEffect(() => {
    setDisplayTime(formatTime(timeLeft));
  }, [timeLeft]);

  useEffect(() => {
    if (!timerActive) return;

    const updateCountdown = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(updateCountdown);

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
          return 0;
        } else {
          setDisplayTime(formatTime(prev - 1));
          return prev - 1;
        }
      });
    }, 1000);

    return () => clearInterval(updateCountdown);
  }, [timerActive, currentTimer, currentPomodoro]);

  const handleSkip = () => {
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

  const handleRestart = () => {
    setTimerActive(false);
    setTimeLeft(currentTimer.length * 60);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div data-tip="Reset count" className="tooltip">
        <IconButton
          onClick={() => {
            setCurrentPomodoro(1);
          }}
        >
          #{currentPomodoro}
        </IconButton>
      </div>

      <h2 className="font-medium text-6xl bg-base-300 p-6 rounded-xl">
        {displayTime}
      </h2>

      {currentTimer.displayName}

      <div className="flex flex-row gap-3 items-center">
        <Button onClick={() => setTimerActive((prev) => !prev)}>
          {timerActive ? <span>Pause</span> : <span>Start</span>}
        </Button>
        <div className="tooltip" data-tip="Skip to next timer">
          <IconButton onClick={handleSkip}>
            <img src={skipIcon} width="24" height="24" alt="Skip" />
          </IconButton>
        </div>
        <div className="tooltip" data-tip="Restart timer">
          <IconButton onClick={handleRestart}>
            <img src={restartIcon} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
