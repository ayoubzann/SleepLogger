import React from "react";
import SleepLogForm from "./SleepLogForm";
import FetchApi from "./FetchApi";

interface SleepLogPageProps {}

const SleepLogPage: React.FC<SleepLogPageProps> = () => {
  const postSleepLog = (
    duration: number,
    bedTime: string,
    wakeTime: string,
    restfullnessScale: number
  ) => {
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

  const handleSubmit = (
    duration: number,
    bedTime: string,
    wakeTime: string,
    restfullnessScale: number
  ) => {
    postSleepLog(duration, bedTime, wakeTime, restfullnessScale);
  };

  return (
    <div>
      <SleepLogForm onSubmit={handleSubmit} />
      <FetchApi/>
    </div>
  );
};

export default SleepLogPage;
