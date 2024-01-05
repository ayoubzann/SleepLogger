using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("[controller]")]
public class SleepLogController : ControllerBase
{

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

}

public class Bs
{
    public string BsLine {get; set;}
}