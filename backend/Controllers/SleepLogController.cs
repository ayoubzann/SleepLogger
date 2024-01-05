using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("[controller]")]
public class SleepLogController : ControllerBase
{

 [HttpGet]
 public IActionResult GetOneLog(){
    return Ok();
 }   
 
}
