/* 
Refactor and export to background.js
 useEffect(() => {
    if (!timerActive) return;

    const updateCountdown = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(updateCountdown);

          if (currentTimer.id === "pomodoro") {
            if (lbIntervals.includes(currentPomodoro)) {
              setCurrentTimer(timers[2]);
              setTimeLeft(timers[2].length * 60);
            } else {
              setCurrentTimer(timers[1]);
              setTimeLeft(timers[1].length * 60);
            }
          } else {
            setCurrentTimer(timers[0]);
            setTimeLeft(timers[0].length * 60);
            setCurrentPomodoro((prev) => prev + 1);
          }

          setTimerActive(false);
          return 0;
        } else {
          setDisplayTime(formatTime(prev - 1));
          return prev - 1;
        }
      });
    }, 1000);

    return () => clearInterval(updateCountdown);
  }, [timerActive, currentTimer, currentPomodoro]);

  

  */
