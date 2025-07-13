/*
Some info for logging dates in the future:

(Use chrome storage sync)

const now = new Date();
const formattedDate = now.toLocaleString("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

Below is some mock data of dates when Pomodoros were completed
*/

export const dateLogs = [
  "10 Jun 2025, 8:22 AM",
  "10 Jun 2025, 1:45 PM",
  "10 Jun 2025, 6:30 PM",
  "12 Jun 2025, 9:15 AM",
  "12 Jun 2025, 3:50 PM",
  "13 Jun 2025, 11:05 AM",
  "13 Jun 2025, 7:12 PM",
  "14 Jun 2025, 10:44 AM",
  "14 Jun 2025, 2:30 PM",
  "15 Jun 2025, 4:05 PM",
  "15 Jun 2025, 8:18 PM",
  "16 Jun 2025, 12:20 PM",
  "17 Jun 2025, 9:55 AM",
  "17 Jun 2025, 5:40 PM",
  "18 Jun 2025, 3:10 PM",
  "18 Jun 2025, 7:00 PM",
  "19 Jun 2025, 11:25 AM",
  "19 Jun 2025, 6:45 PM",
];
