using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bookslibrary.api.application.Models;
using bookslibrary.api.application.Services.AuthorsService;
using bookslibrary.api.application.Services.AuthorsService.Models;
using bookslibrary.api.application.Services.BooksService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace bookslibrary.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthorsController : ControllerBase
    {
        private readonly IAuthorsService authorsService;

        public AuthorsController(IAuthorsService authorsService)
        {
            this.authorsService = authorsService;
        } 

        [HttpGet]
        public IActionResult ListAllAuthors()
        {
            ListModel<ListAllAuthorsModel> model = this.authorsService.ListAllAuthors();
            if (model == null) return NotFound();
            return Ok(model);
        }
    }
}