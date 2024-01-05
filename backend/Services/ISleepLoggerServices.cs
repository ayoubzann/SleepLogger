public interface ISleepLoggerServices
{
    IEnumerable<SleepLog> GetAllSleepLogs();
    SleepLogResponse GetSleepLogById(string id);
    SleepLog AddSleepLog(SleepLogReceiver receiver);
}