using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("[controller]")]
public class SleepLogController : ControllerBase
{

    public static List<SleepLog> sleepLogs = new();

    [HttpGet("/getLogs")]
    public ActionResult<string> GetOneLog()
    {

        Bs newBs = new(){BsLine = "Blabla"};

        return Ok(newBs);
    }

    [HttpGet("/getAllLogs")]
    public ActionResult<string> GetAllLogs()
    {
        return Ok("All sleep logs");
    }

    [HttpPost("/addSleepLogs")]
    public async Task<ActionResult<SleepLogReceiver>> PostSleepLog()
    {
        sleepLogs.Add(s)
    }

}

public class Bs
{
    public string BsLine {get; set;}
}