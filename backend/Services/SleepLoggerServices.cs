
public class SleepLoggerServices : ISleepLoggerServices
{

    private static List<SleepLog> sleepLogs = new();

    public SleepLog AddSleepLog(SleepLogReceiver sleepLogReceiver)
    {
        SleepLog sleepLog = new SleepLog(sleepLogReceiver);
        sleepLogs.Add(sleepLog);

        return sleepLog;
    }

    public IEnumerable<SleepLog> GetAllSleepLogs()
    {
        return sleepLogs;
    }

    public SleepLogResponse GetSleepLogById(string id)
    {
        var log = sleepLogs.FirstOrDefault(j => j.Id == id);

        SleepLogResponse response = new SleepLogResponse(log);

        return response;
    }
}