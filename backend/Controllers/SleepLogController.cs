using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("[controller]")]
public class SleepLogController : ControllerBase
{

    SleepLoggerServices _repo = new();


    [HttpPost("/addSleepLogs")]
    public ActionResult<SleepLog> PostSleepLog(SleepLogReceiver received)
    {
        var response = _repo.AddSleepLog(received);

        return Ok(response);
        
    }

    [HttpGet("/getLogs")]
    public ActionResult<string> GetOneLog()
    {

        Bs newBs = new(){BsLine = "Blabla"};

        return Ok(newBs);
    }

    [HttpGet("/getAllLogs")]
    public ActionResult<List<SleepLog>> GetAllLogs()
    {
        var result = _repo.GetAllSleepLogs();
        return Ok(result);
    }

}

public class Bs
{
    public string BsLine {get; set;}
}