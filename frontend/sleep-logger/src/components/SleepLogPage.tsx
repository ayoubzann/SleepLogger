import React from "react";
import SleepLogForm from "./SleepLogForm";

const SleepLogPage = () => {
    
  const postSleepLog = (duration, bedTime, wakeTime, restfullnessScale) => {
    fetch("https://sleeplogger-e3uzzxqbva-lz.a.run.app/addSleepLogs", {
      method: "POST",
      body: JSON.stringify({
        duration,
        bedTime,
        wakeTime,
        restfullnessScale,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

  const handleSubmit = ( duration, bedTime, wakeTime, restfullnessScale) => {
    postSleepLog(duration, bedTime, wakeTime, restfullnessScale);
  };

  return(
  <div>
    <SleepLogForm onSubmit={handleSubmit} />
  </div>);
};

export default SleepLogPage;
