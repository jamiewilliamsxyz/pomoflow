import { useState, useEffect } from "react";
import { PageLayout } from "../components/PageLayout";
import { Button } from "../components/ui/Button";
import { TaskCard } from "../components/ui/TaskCard";

export const Tasks = () => {
  const [userTasks, setUserTasks] = useState([]);

  const createTask = () => {
    const maxId =
      userTasks.length > 0 ? Math.max(...userTasks.map((t) => t.id)) : 0;
    const newId = maxId + 1;

    setUserTasks([...userTasks, { id: newId, content: "", completed: false }]);
  };

  const removeTask = (id) => {
    setUserTasks(userTasks.filter((task) => task.id !== id));
  };

  const handleSave = () => {
    chrome.storage.local.set({ taskData: userTasks });
  };

  useEffect(() => {
    chrome.storage.local.get(["taskData"]).then((result) => {
      setUserTasks(result.taskData || []);
    });
  }, []);

  const tasks = userTasks.map((task) => (
    <TaskCard
      key={task.id}
      id={task.id}
      defaultContent={task.content}
      onRemove={removeTask}
    />
  ));

  return (
    <PageLayout pageTitle="Tasks">
      <div className="flex flex-col gap-2 max-h-80 overflow-y-auto">
        {tasks}
      </div>

      <div className="flex flex-row gap-6">
        <Button onClick={createTask}>Create</Button>
        <Button onClick={handleSave}>Save</Button>
      </div>
    </PageLayout>
  );
};
