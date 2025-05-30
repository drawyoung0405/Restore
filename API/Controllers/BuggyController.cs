
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController: BaseApiController
    {
        [HttpGet("not-found")]
        public IActionResult getNotFound(){
            return NotFound();
        }

        [HttpGet("bad-request")]
        public IActionResult getBadRequest()
        {
            return BadRequest("This is not a good request");
        }

        [HttpGet("unauthorized")]
        public IActionResult GetUnaithorised()
        {
            return Unauthorized();
        }

         [HttpGet("validation-error")]
        public IActionResult GetValidationError()
        {
            ModelState.AddModelError("Problem1", "This is the first error");
            ModelState.AddModelError("Problem2", "This is the second error");
            return ValidationProblem();
        }

         [HttpGet("server-error")]
        public IActionResult GetServerError()
        {
            throw new Exception("This is a server error");
        }
    }
}