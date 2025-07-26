import { PageLayout } from "./components/PageLayout";
import { TimersBar } from "./components/TimersBar";
import { Timer } from "./components/Timer";
import { TimerControls } from "./components/TimerControls";

export const App = () => {
  return (
    <PageLayout>
      <div className="w-[320px] flex flex-grow flex-col gap-5 items-center">
        <TimersBar />
        <Timer />
        <TimerControls />
      </div>
    </PageLayout>
  );
};
