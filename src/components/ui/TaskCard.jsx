import { useState, useEffect } from "react";

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
    <div className="flex flex-row gap-2 items-center bg-base-300 p-2 rounded-lg shadow-xl">
      <input
        type="checkbox"
        onChange={handleCompleted}
        checked={completed}
        className={"checkbox checkbox-success"}
      />

      <input
        type="text"
        value={content}
        onChange={handleContent}
        placeholder="Task"
        className="input focus:outline-0"
      />

      <button
        onClick={handleRemove}
        className="btn btn-square btn-ghost btn-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="14.25"
          viewBox="0 0 448 512"
        >
          <path
            fill="#fd4444"
            d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"
          />
        </svg>
      </button>
    </div>
  );
};
