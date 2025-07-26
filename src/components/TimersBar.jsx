export const TimersBar = () => {
  const timers = ["Pomodoro", "Short Break", "Long Break"];

  return (
    <div className="w-full flex items-center justify-center gap-2 bg-base-200 rounded-lg shadow-md p-2">
      {timers.map((timer) => (
        <button key={timer} className="btn btn-soft btn-sm btn-primary flex-1">
          {timer}
        </button>
      ))}
    </div>
  );
};
