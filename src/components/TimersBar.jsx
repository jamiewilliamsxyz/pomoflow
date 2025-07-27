export const TimersBar = () => {
  const timers = ["Focus", "Short Break", "Long Break"];

  return (
    <div
      role="tablist"
      className="tabs tabs-border flex items-center justify-center w-full bg-base-200 rounded-lg shadow-md p-1"
    >
      {timers.map((timer) => (
        <a key={timer} role="tab" className="tab">
          {timer}
        </a>
      ))}
    </div>
  );
};
