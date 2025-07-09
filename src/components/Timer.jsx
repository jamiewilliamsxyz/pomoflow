import { useState, useEffect } from "react";
import { Button } from "../components/ui/Button";
import { IconButton } from "../components/ui/IconButton";
import skipIcon from "../assets/icons/skip.svg";
import restartIcon from "../assets/icons/restart.svg";
import { formatTime } from "../utils/formatTime";
import { handleSkip } from "../utils/formatTime";
import { handleRestart } from "../utils/formatTime";

export const Timer = () => {
  const [displayTime, setDisplayTime] = useState("");

  useEffect(() => {
    setDisplayTime(formatTime(timeLeft));
  }, [timeLeft]);

  // Sort this below out
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
