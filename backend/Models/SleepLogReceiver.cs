using System.ComponentModel.DataAnnotations;
namespace SleepLogger.Models;

public record SleepLogReceiver(
    double Duration,
    string BedTime,
    string WakeTime,
    int RestfullnessScale
    );