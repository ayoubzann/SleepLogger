import React, { useState, ChangeEvent, FormEvent } from 'react';

type SleepLogFormProps = {
  onSubmit: (duration: number, bedTime: string, wakeTime: string, restfullnessScale: number) => void;
};

const SleepLogForm: React.FC<SleepLogFormProps> = ({ onSubmit }) => {
  const [duration, setDuration] = useState<number>(0);
  const [bedTime, setBedTime] = useState<string>("");
  const [wakeTime, setWakeTime] = useState<string>("");
  const [restfullnessScale, setRestfullnessScale] = useState<number>(0);

  const handleDurationChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const value = Number(event.target.value);
    if (!isNaN(value)) {
      setDuration(value);
    }
  };

  const handleBedtimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setBedTime(event.target.value);
  };

  const handleWakeTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setWakeTime(event.target.value);
  };

  const handleRestfullnessScaleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const value = Number(event.target.value);
    if (!isNaN(value)) {
      setRestfullnessScale(value);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(duration, bedTime, wakeTime, restfullnessScale);
  };

  return (
    <div>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <label className='p-5'>
          Duration<br/>
          <input type="number" className='text-black' onChange={handleDurationChange} value={duration} />
        </label>
        <label className='p-5'>
          Bedtime<br/>
          <input type="text" className='text-black' onChange={handleBedtimeChange} value={bedTime} />
        </label>
        <label className='p-5'>
          Waketime<br/>
          <input type="text" className='text-black' onChange={handleWakeTimeChange} value={wakeTime} />
        </label>
        <label className='p-5'>
          Restfullness scale 1-10<br/>
          <input type="number" className='text-black' onChange={handleRestfullnessScaleChange} value={restfullnessScale} />
        </label>
        <button className='border border-solid border-purple-700 bg-purple-700 rounded-lg p-5' type='submit'> Submit sleep log </button>
      </form>
    </div>
  );
};

export default SleepLogForm;
