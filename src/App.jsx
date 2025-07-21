import { SkipForward, TimerReset } from "lucide-react";
import { PageLayout } from "./components/PageLayout";
import { DefaultButton } from "./components/ui/DefaultButton";

// Keep logic backend

export const App = () => {
  let counter = 100;
  return (
    <PageLayout>
      <div className="flex flex-grow flex-col justify-center">
        <div className="w-[320px] flex flex-col items-center gap-4 bg-base-200 p-4 rounded-lg shadow-sm">
          <span className="countdown font-mono text-7xl text-base-content font-semibold">
            <span
              style={{ "--value": 24 }}
              aria-live="polite"
              aria-label={counter}
            >
              24
            </span>
            :
            <span
              style={{ "--value": 59 }}
              aria-live="polite"
              aria-label={counter}
            >
              59
            </span>
          </span>

          <progress
            className="progress progress-accent w-56 mb-3.5"
            value={20}
            max="100"
          ></progress>

          <div className="flex flex-col gap-6 items-center">
            <DefaultButton>Start</DefaultButton>

            <div className="flex flex-row gap-4">
              <button className="btn btn-ghost btn-square btn-sm">
                <SkipForward className="w-7 h-7 text-warning" />
              </button>
              <button className="btn btn-square btn-ghost btn-sm">
                <TimerReset className="w-7 h-7 text-error" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
