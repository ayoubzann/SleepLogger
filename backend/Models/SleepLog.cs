using System.ComponentModel.DataAnnotations;

public class SleepLog
{
    public string Id {get;} = Guid.NewGuid().ToString();
    [Required]
    public double Duration { get; set; }
    [Required]
    public string BedTime { get; set; }
    [Required]
    public string WakeTime { get; set; }
    [Required]
    public int RestfullnessScale { get; set; }

}