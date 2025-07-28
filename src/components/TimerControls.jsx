import { TimerContext } from "../context/TimerContext";
import { useContext } from "react";
import { SkipForward, TimerReset } from "lucide-react";

export const TimerControls = () => {
  const { timerState, handleSkip, handleReset, handleIsRunning } =
    useContext(TimerContext);
  return (
    <div className="w-full flex bg-base-200 items-center rounded-lg shadow-md p-2 gap-2">
      <button
        onClick={() => handleIsRunning()}
        className="btn btn-soft btn-md btn-primary flex-grow"
      >
        {timerState.isRunning ? "Stop" : "Start"}
      </button>
      <div className="flex gap-2 shrink-0">
        <button className="btn btn-ghost btn-square btn-sm">
          <SkipForward
            onClick={() => handleSkip()}
            className="w-6.5 h-6.5 text-warning"
          />
        </button>
        <button className="btn btn-square btn-ghost btn-sm">
          <TimerReset
            onClick={() => handleReset()}
            className="w-6.5 h-6.5 text-error"
          />
        </button>
      </div>
    </div>
  );
};
