import { PageLayout } from "./components/PageLayout";
import { Button } from "./components/ui/Button";
import { LinkButton } from "./components/ui/LinkButton";

// Keep logic backend

export const App = () => {
  let counter = 100;
  return (
    <PageLayout>
      <div className="flex flex-grow flex-col justify-center">
        <div className="w-[320px] my-2 pb-8 flex flex-col items-center gap-4 bg-base-200 p-4 rounded-lg shadow-sm">
          <span className="text-sm font-light">#1</span>
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

          <Button>Start</Button>

          <div className="flex flex-row gap-6">
            <LinkButton>Skip</LinkButton>
            <LinkButton>Restart</LinkButton>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
