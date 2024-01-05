public class SleepLogResponse
{

    public double Duration { get; set; }

    public string BedTime { get; set; }

    public string WakeTime { get; set; }

    public int RestfullnessScale { get; set; }

    public SleepLogResponse(SleepLog log)
    {
        Duration = log.Duration;
        BedTime = log.BedTime;
        WakeTime = log.WakeTime;
        RestfullnessScale = log.RestfullnessScale;
        
    }

}