import { TimerContext } from "../context/TimerContext";
import { useContext } from "react";

export const PhaseSelector = () => {
  const { timerState, handlePhaseChange } = useContext(TimerContext);

  const phases = [
    { name: "Focus", value: "focus" },
    { name: "Short Break", value: "shortBreak" },
    { name: "Long Break", value: "longBreak" },
  ];

  const mappedPhases = phases.map((phase) => {
    const isActive = timerState.phase === phase.value;
    return (
      <a
        key={phase.value}
        role="tab"
        className={`tab ${isActive ? "tab-active" : ""}`}
        onClick={() => handlePhaseChange(phase.value)}
      >
        {phase.name}
      </a>
    );
  });

  return (
    <div
      role="tablist"
      className="tabs tabs-border flex items-center justify-center w-full bg-base-200 rounded-lg shadow-md p-1"
    >
      {mappedPhases}
    </div>
  );
};
