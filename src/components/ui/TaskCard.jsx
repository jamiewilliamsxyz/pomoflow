import { useState, useEffect } from "react";
import { Trash } from "lucide-react";

export const TaskCard = ({
  taskName,
  taskPriority,
  taskCompleted,
  id,
  onRemove,
  onCompletedUpdate,
}) => {
  const [completed, setCompleted] = useState(false);
  const [badgeColour, setBadgeColour] = useState("");
  const [completedStyle, setCompletedStyle] = useState("");

  const handleRemove = () => {
    onRemove(id);
  };

  const handleCompleted = (e) => {
    const updatedCompleted = e.target.checked;
    setCompleted(updatedCompleted);
    onCompletedUpdate(id, updatedCompleted);
  };

  useEffect(() => {
    switch (taskPriority) {
      case "Urgent":
        setBadgeColour("badge-primary");
        break;
      case "High":
        setBadgeColour("badge-error");
        break;
      case "Medium":
        setBadgeColour("badge-warning");
        break;
      case "Low":
        setBadgeColour("badge-success");
        break;
      case "Archive":
        setBadgeColour("badge-secondary");
        break;
      default:
        setBadgeColour("badge-neutral");
    }
  }, []);

  useEffect(() => {
    if (taskCompleted !== undefined) {
      setCompleted(taskCompleted);
    }

    if (taskCompleted) {
      setCompletedStyle("line-through");
    } else {
      setCompletedStyle("");
    }
  }, [taskCompleted]);

  useEffect(() => {}, [taskCompleted]);

  return (
    <li className="list-row flex flex-row p-2 justify-between items-center">
      <div className="flex flex-col gap-2">
        <div className={`badge badge-sm badge-soft ${badgeColour}`}>
          {taskPriority}
        </div>
        <h2 className={`text-[16px] ${completedStyle}`}>{taskName}</h2>
      </div>

      <div className="flex flex-row gap-2 self-start">
        <input
          type="checkbox"
          onChange={handleCompleted}
          checked={completed}
          className={"checkbox checkbox-sm checkbox-success"}
        />
        <button onClick={handleRemove} className="cursor-pointer">
          <Trash className="w-5 h-5 text-error" />
        </button>
      </div>
    </li>
  );
};
