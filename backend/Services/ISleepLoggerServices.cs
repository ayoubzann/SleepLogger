public interface ISleepLoggerServices
{
    IEnumerable<SleepLog> GetAllSleepLogs();
    SleepLog GetSleepLogById();
    SleepLog AddSleepLog(SleepLogReceiver receiver);
}