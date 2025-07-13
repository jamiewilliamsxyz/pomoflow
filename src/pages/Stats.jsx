import { PageLayout } from "../components/PageLayout";
import { dateLogs } from "../background";

export const Stats = () => {
  const logs = dateLogs.map((log, index) => (
    <li
      key={index}
      className="text-[16px] bg-base-300 rounded-lg shadow-xl p-1 w-full"
    >
      {log}
    </li>
  ));
  const totalCompleted = dateLogs.length;

  return (
    <PageLayout pageTitle="Stats">
      <div className="w-full text-center flex flex-col gap-5 items-center bg-base-300 p-4 rounded-lg shadow-xl">
        <h2 className="font-semibold text-xl">Total Pomodoros Completed</h2>
        <p className="bg-base-100 p-2 rounded-lg w-full">{totalCompleted}</p>
        {/* Add past 1, 7, 30, 182, 365 days */}
      </div>

      <div className="p-4 text-center flex flex-col gap-5 items-center bg-base-300 w-full rounded-lg shadow-xl">
        <h2 className="font-semibold text-xl">
          Dates When You Completed a Pomodoro
        </h2>
        <ul className="rounded-lg bg-base-100 w-full p-4 flex flex-col gap-4 max-h-60 overflow-y-auto">
          {logs}
        </ul>
      </div>
    </PageLayout>
  );
};
