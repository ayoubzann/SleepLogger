using System.ComponentModel.DataAnnotations;

public class SleepLogReceiver
{

    [Required(ErrorMessage = "In order for us to log accurately, we need to know how long you slept. An estimate is alright!")]
    public double Duration { get; set; }

    [Required(ErrorMessage = "In order for us to log accurately, we need to know when you went to sleep. An estimate is alright!")]
    public string BedTime { get; set; }

    [Required(ErrorMessage = "In order for us to log accurately, we need to know when you woke up. An estimate is alright!")]
    public string WakeTime { get; set; }

    [Required(ErrorMessage = "In order for us to log accurately, we need to know how your sleep quality was on a scale from 0-10. This is completely subjective!")]
    [Range(0, 10, ErrorMessage = "Please use a number from 0-10.")]
    public int RestfullnessScale { get; set; }

}