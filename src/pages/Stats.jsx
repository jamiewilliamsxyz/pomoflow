import { PageLayout } from "../components/PageLayout";
import { dateLogs } from "../background";
import { Button } from "../components/ui/Button";

// Make logs work with length and date
// Make export CSV work
// https://daisyui.com/components/stat/

export const Stats = () => {
  const logs = dateLogs.map((log, index) => (
    <li
      key={index}
      className="text-[14px] bg-base-100 rounded-lg shadow-sm p-1 w-full"
    >
      {log}
    </li>
  ));
  const totalCompleted = dateLogs.length;

  return (
    <PageLayout>
      <div className="flex flex-col gap-4 mt-2 items-center">
        <h2 className="font-semibold text-xl text-center">
          Total Pomodoros Completed
        </h2>

        <p className="w-[320px] bg-base-200 py-2 rounded-lg shadow-sm text-center">
          {totalCompleted}
        </p>

        {/* Add past 1, 7, 30, 182, 365 days */}
      </div>
      <div className="flex flex-col items-center gap-4 mt-4">
        <h2 className="font-semibold text-xl text-center">
          Dates When You Completed a Pomodoro
        </h2>

        <ul className="w-[320px] flex flex-col gap-4 bg-base-200 p-4 rounded-lg shadow-sm text-center max-h-96 overflow-y-auto">
          {logs}
        </ul>
      </div>
      <Button>Export CSV</Button>
    </PageLayout>
  );
};
