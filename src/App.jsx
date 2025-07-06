import { Header } from "./components/Header";
import { Timer } from "./components/Timer";

export const App = () => {
  return (
    <div>
      <Header pageTitle="Pomodoro" />
      <Timer />
    </div>
  );
};
