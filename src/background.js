// Timer logic

import { timerLogic } from "./lib/timerLogic";
import { calculateLbIntervals } from "../utils/calculateLbIntervals";

const timers = [
  { id: "pomodoro", displayName: "Pomodoro", length: 25 },
  { id: "shortBreak", displayName: "Short Break", length: 5 },
  { id: "longBreak", displayName: "Long Break", length: 15 },
];

let timerState = {
  timerActive: false,
  timeLeft: timers[0].length * 60,
  currentTimer: timers[0],
  currentPomodoro: 1,
};

let lbIntervalLength = 4;
calculateLbIntervals(lbIntervalLength);
