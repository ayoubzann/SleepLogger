
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

    public SleepLog GetSleepLogById()
    {
        throw new NotImplementedException();
    }
}