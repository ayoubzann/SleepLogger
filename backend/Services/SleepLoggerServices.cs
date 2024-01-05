
public class SleepLoggerServices : ISleepLoggerServices
{

    private static List<SleepLog> sleepLogs = new();

    public void AddSleepLog(SleepLogReceiver sleepLogReceiver)
    {
        throw new NotImplementedException();
    }

    public IEnumerable<SleepLog> GetAllSleepLogs()
    {
        throw new NotImplementedException();
    }

    public SleepLog GetSleepLogById()
    {
        throw new NotImplementedException();
    }
}