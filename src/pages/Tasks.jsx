import { PageLayout } from "../components/PageLayout";
import { Button } from "../components/ui/Button";
import { TaskCard } from "../components/ui/TaskCard";
import { userTasks } from "../background.js";
import { createTask } from "../background.js";

export const Tasks = () => {
  const tasks = userTasks.map((task) => (
    // Render each existing task from userTasks with the props
    <TaskCard defaultContent={userTasks[0].content} id={userTasks[0].id} />
  ));

  return (
    <PageLayout pageTitle="Tasks">
      <div className="flex flex-col gap-2 max-h-80 overflow-y-auto">
        {tasks}
      </div>

      <div className="flex flex-row gap-6">
        <Button onClick={createTask}>Create Task</Button>
      </div>
    </PageLayout>
  );
};
