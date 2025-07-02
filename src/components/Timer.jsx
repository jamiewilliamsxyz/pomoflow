import { useState } from "react";
import Button from "../components/ui/Button";
import IconButton from "../components/ui/IconButton";
import skipIcon from "../assets/icons/skip.svg";

const Timer = () => {
  const [block, setBlock] = useState([{ name: "pomodoro", length: 2500 }]);
  const [timerActive, setTimerActive] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="font-medium text-6xl bg-base-300 p-6 rounded-xl">
        {block.length}
      </h2>
      <div className="flex flex-row gap-3 items-center">
        <Button
          onClick={() => {
            setTimerActive((prev) => !prev);
          }}
        >
          {timerActive ? <span>Pause</span> : <span>Start</span>}
        </Button>
        <IconButton>
          <img src={skipIcon} width="24" height="24" alt="Skip"></img>
        </IconButton>
      </div>
    </div>
  );
};

export default Timer;
