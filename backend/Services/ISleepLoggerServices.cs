public interface ISleepLoggerServices
{
    IEnumerable<SleepLog> GetAllSleepLogs();
    SleepLog GetSleepLogById();
    void AddSleepLog();
}