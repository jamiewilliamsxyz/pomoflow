export const Timer = () => {
  return (
    <div className="w-full flex flex-col gap-4 p-6 bg-base-200 rounded-lg shadow-md items-center">
      <span className="countdown font-mono text-[90px] font-semibold">
        <span style={{ "--value": 24 }}>24</span>:
        <span style={{ "--value": 59 }}>59</span>
      </span>

      <progress
        className="progress progress-success w-full"
        value={0}
        max="100"
      ></progress>
    </div>
  );
};
