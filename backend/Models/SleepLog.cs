public class SleepLog
{
    public string Id { get; } = Guid.NewGuid().ToString();

    public double Duration { get; set; }

    public string BedTime { get; set; }

    public string WakeTime { get; set; }

    public int RestfullnessScale { get; set; }

    public SleepLog(SleepLogReceiver receiver)
    {
        Duration = receiver.Duration;
        BedTime = receiver.BedTime;
        WakeTime = receiver.WakeTime;
        RestfullnessScale = receiver.RestfullnessScale;
        
    }

}