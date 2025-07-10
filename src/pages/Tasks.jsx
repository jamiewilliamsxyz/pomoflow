import { PageLayout } from "../components/PageLayout";
import { Button } from "../components/ui/Button";
import { LinkButton } from "../components/ui/LinkButton";
import { TaskCard } from "../components/ui/TaskCard";

export const Tasks = () => {
  return (
    <PageLayout pageTitle="Tasks">
      <div>
        <div className="flex flex-col gap-2 items-center">
          <input
            placeholder="Task"
            type="text"
            className="input input-primary input-lg"
          />
          <Button>Add</Button>
        </div>

        <div className="w-full h-[1px] bg-base-300 rounded-full"></div>

        <div>Task Card List</div>
      </div>
    </PageLayout>
  );
};
