import { useState, useEffect } from "react";
import { PageLayout } from "../components/PageLayout";
import { DefaultButton } from "../components/ui/DefaultButton";
import { SaveButton } from "../components/ui/SaveButton";
import { TaskCard } from "../components/ui/TaskCard";

// Add task priority system? https://daisyui.com/components/badge/

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

  const updateContent = (id, updatedContent) => {
    setUserTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, content: updatedContent } : task
      )
    );
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
      <ul className="w-[320px] list bg-base-200 rounded-box shadow-md max-h-80 overflow-y-auto">
        {userTasks.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            taskContent={task.content}
            taskCompleted={task.completed}
            onRemove={removeTask}
            onContentUpdate={updateContent}
            onCompletedUpdate={updateCompleted}
          />
        ))}
      </ul>

      <div className="flex flex-row gap-6">
        <DefaultButton onClick={createTask}>Create</DefaultButton>
        <SaveButton onClick={handleSave}>Save</SaveButton>
      </div>
    </PageLayout>
  );
};
