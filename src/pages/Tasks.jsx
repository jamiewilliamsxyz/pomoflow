import { useState, useEffect } from "react";
import { PageLayout } from "../components/PageLayout";
import { SaveButton } from "../components/ui/SaveButton";
import { CreateTask } from "../components/CreateTask";
import { TaskCard } from "../components/ui/TaskCard";

const priorityOrder = {
  Urgent: 1,
  High: 2,
  Medium: 3,
  Low: 4,
  Archive: 5,
};

export const Tasks = () => {
  const [userTasks, setUserTasks] = useState([]);

  const createTask = (taskName, taskPriority) => {
    // Using uuid is more robust
    const maxId =
      userTasks.length > 0 ? Math.max(...userTasks.map((task) => task.id)) : 0;
    const newId = maxId + 1;

    setUserTasks([
      ...userTasks,
      { id: newId, name: taskName, priority: taskPriority, completed: false },
    ]);
  };

  const removeTask = (id) => {
    setUserTasks(userTasks.filter((task) => task.id !== id));
  };

  const updateCompleted = (id, updatedCompleted) => {
    setUserTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: updatedCompleted } : task
      )
    );
  };

  const handleSave = () => {
    chrome.storage.sync.set({ taskData: userTasks });
  };

  useEffect(() => {
    chrome.storage.sync.get(["taskData"]).then((result) => {
      setUserTasks(result.taskData || []);
    });
  }, []);

  return (
    <PageLayout>
      <CreateTask onCreate={createTask} />
      <ul className="w-[320px] list bg-base-200 rounded-box shadow-md max-h-72 overflow-y-auto">
        {userTasks
          .toSorted((a, b) => {
            if (a.completed !== b.completed) return a.completed ? 1 : -1;
            return priorityOrder[a.priority] - priorityOrder[b.priority];
          })

          .map((task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              taskName={task.name}
              taskCompleted={task.completed}
              taskPriority={task.priority}
              onRemove={removeTask}
              onCompletedUpdate={updateCompleted}
            />
          ))}
      </ul>

      <SaveButton onClick={handleSave}>Save</SaveButton>
    </PageLayout>
  );
};
