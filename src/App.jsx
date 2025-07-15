import { PageLayout } from "./components/PageLayout";
import { Button } from "./components/ui/Button";
import { LinkButton } from "./components/ui/LinkButton";

export const App = () => {
  // https://daisyui.com/components/countdown/
  return (
    <PageLayout>
      <h2 className="font-semibold text-8xl/normal">25:00</h2>

      <Button>Start/Stop</Button>
      <div className="flex flex-row gap-6">
        <LinkButton>Skip</LinkButton>
        <LinkButton>Restart</LinkButton>
      </div>
    </PageLayout>
  );
};
