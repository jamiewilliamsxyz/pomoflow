import { PageLayout } from "./components/PageLayout";
import { PhaseSelector } from "./components/PhaseSelector";
import { TimerDisplay } from "./components/TimerDisplay";
import { TimerControls } from "./components/TimerControls";

export const App = () => {
  return (
    <PageLayout>
      <div className="w-[320px] flex flex-grow flex-col gap-5 items-center">
        <PhaseSelector />
        <TimerDisplay />
        <TimerControls />
      </div>
    </PageLayout>
  );
};
