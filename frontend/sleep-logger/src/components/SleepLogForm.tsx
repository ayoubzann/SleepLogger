import React, { useState, ChangeEvent, FormEvent } from 'react'

type SleepLogFormProps = {
    onSubmit: (duration: number, bedTime: string, wakeTime: string, restfullnessScale: number) => void;
  };

  const SleepLogForm: React.FC<SleepLogFormProps> = ({ onSubmit }) => {

    const [duration, setDuration] = useState(0);
    const [bedTime, setBedTime] = useState("");
    const [wakeTime, setWakeTime] = useState("");
    const [restfullnessScale, setRestfullnessScale] = useState(0);

    const handleDurationChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setDuration(event.target.value);
    }
    const handleBedtimeChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setBedTime(event.target.value);
    }
    const handleWakeTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setWakeTime(event.target.value);
    }
    const handleRestfullnessScaleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setRestfullnessScale(event.target.value);
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        onSubmit(duration, bedTime, wakeTime, restfullnessScale);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Duration
                <input type="number" className='text-black' onChange={handleDurationChange} value={duration}/>
            </label>
            <label>Bedtime
                <input type="text" className='text-black' onChange={handleBedtimeChange} value={bedTime}/>
            </label>
            <label>Waketime
                <input type="text" className='text-black' onChange={handleWakeTimeChange} value={wakeTime}/>
            </label>
            <label>Restfullness scale 1-10
                <input type="number" className='text-black' onChange={handleRestfullnessScaleChange} value={restfullnessScale}/>
            </label>
            <button className='border-solid border-sky-500' type='submit'> Submit sleep log </button>
        </form>
    </div>
  )
}

export default SleepLogForm