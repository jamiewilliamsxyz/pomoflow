import { useState } from "react";

export const CreateTask = ({ onCreate }) => {
  const [taskName, setTaskName] = useState("");
  const [taskPriority, setTaskPriority] = useState("");
  const [validationMessage, setValidationMessage] = useState("Create");

  const handleCreate = () => {
    if (taskName.trim() === "" && taskPriority === "") {
      setValidationMessage("Set a priority & longer task name");
    } else if (taskName.trim() === "") {
      setValidationMessage("Your task name is too short");
    } else if (taskPriority === "") {
      setValidationMessage("Please set a task priority");
    } else {
      setValidationMessage("Create");
      onCreate(taskName, taskPriority);
    }
  };

  const options = [
    { value: "Urgent", colour: "primary" },
    { value: "High", colour: "error" },
    { value: "Medium", colour: "warning" },
    { value: "Low", colour: "success" },
    { value: "Archive", colour: "secondary" },
  ];

  return (
    <div className="flex flex-col gap-3 items-center p-3 w-[320px] rounded-box shadow-md bg-base-200">
      <div className="flex flex-row gap-3 items-center">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Task"
          maxLength="100"
          className="text-[14px] input border-0 focus:outline-0"
        />
        <select
          onChange={(e) => setTaskPriority(e.target.value)}
          defaultValue="Priority"
          className="select text-[14px] border-0 focus:outline-0 w-[48%]"
        >
          <option disabled={true} className="badge badge-soft badge-neutral">
            Priority
          </option>

          {options.map((option) => {
            return (
              <option
                key={option.value}
                value={option.value}
                className={`badge badge-soft badge-${option.colour}`}
              >
                {option.value}
              </option>
            );
          })}
        </select>
      </div>
      <button
        onClick={handleCreate}
        className="btn btn-soft btn-md btn-primary w-full"
      >
        {validationMessage}
      </button>
    </div>
  );
};
