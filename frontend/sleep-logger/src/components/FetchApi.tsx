import React, { useEffect, useState } from "react";

// Define the type for your sleep log data
interface SleepLog {
  duration: string;
  bedTime: string;
  wakeTime: string;
  restfullnessScale: number;
}

const FetchApi: React.FC = () => {
  const [apiRes, setApiRes] = useState<SleepLog[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://sleeplogger-e3uzzxqbva-lz.a.run.app/getAllLogs");
      const data: SleepLog[] = await response.json();
      console.log(data);
      setApiRes(data);
    } catch (error) {
      console.error("Error fetching sleep logs:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    fetchData();
  };

  return (
    <div>
      <button
        className='border border-solid border-purple-700 bg-purple-700 rounded-lg p-5 m-6'
        onClick={handleClick}
      >
        Fetch Sleep Logs
      </button>
      <ul>
        {apiRes && apiRes.length > 0 ? (
          apiRes.map((res, index) => (
            <div key={index} className="m-6">
              <li>Duration: {res.duration}</li>
              <li>Bed Time: {res.bedTime}</li>
              <li>Wake Time: {res.wakeTime}</li>
              <li>Restfulness Scale: {res.restfullnessScale}</li>
            </div>
          ))
        ) : (
          <li>No sleep logs available</li>
        )}
      </ul>
    </div>
  );
};

export default FetchApi;
