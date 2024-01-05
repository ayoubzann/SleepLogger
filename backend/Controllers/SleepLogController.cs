using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("[controller]")]
public class SleepLogController : ControllerBase
{

    [HttpGet("/getLogs")]
    public ActionResult<string> GetOneLog()
    {
        return Ok("One sleep log");
    }

    [HttpGet("/getAllLogs")]
    public ActionResult<string> GetAllLogs()
    {
        return Ok("All sleep logs");
    }

}
