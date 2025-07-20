import { useState, useEffect } from "react";
import { Trash } from "lucide-react";

export const TaskCard = ({
  taskContent,
  taskCompleted,
  id,
  onRemove,
  onContentUpdate,
  onCompletedUpdate,
}) => {
  const [content, setContent] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleRemove = () => {
    onRemove(id);
  };

  const handleContent = (e) => {
    const updatedContent = e.target.value;
    setContent(updatedContent);
    onContentUpdate(id, updatedContent);
  };

  const handleCompleted = (e) => {
    const updatedCompleted = e.target.checked;
    setCompleted(updatedCompleted);
    onCompletedUpdate(id, updatedCompleted);
  };

  useEffect(() => {
    if (taskContent !== undefined) {
      setContent(taskContent);
    }
    if (taskCompleted !== undefined) {
      setCompleted(taskCompleted);
    }
  }, [taskContent, taskCompleted]);

  return (
    <li className="list-row flex flex-row p-3 justify-between items-center">
      <input
        type="text"
        value={content}
        onChange={handleContent}
        placeholder="Task"
        className="font-medium text-[16px] input border-0 focus:outline-0"
      />
      <div className="flex flex-row gap-1.5 items-center">
        <input
          type="checkbox"
          onChange={handleCompleted}
          checked={completed}
          className={"checkbox checkbox-sm checkbox-success"}
        />

        <button
          onClick={handleRemove}
          className="btn btn-square btn-ghost btn-sm"
        >
          <Trash className="w-5 h-5 text-error" />
        </button>
      </div>
    </li>
  );
};
