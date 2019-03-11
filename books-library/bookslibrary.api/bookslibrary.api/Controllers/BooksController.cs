using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bookslibrary.api.application.Models;
using bookslibrary.api.application.Services.BooksService;
using bookslibrary.api.application.Services.BooksService.Models;
using bookslibrary.api.application.Services.Models.BooksService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace bookslibrary.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly IBooksService booksService;

        public BooksController(IBooksService booksService)
        {
            this.booksService = booksService;
        }

        [HttpGet]
        [Route("")]
        public IActionResult ListAllBooks()
        {
            ListModel<ListAllBooksModel> model = this.booksService.ListAllBooks();
            if (model == null) return NotFound();
            return Ok(model);
        }

        [HttpGet("{id}")]
        [Route("{id:int}")]
        public IActionResult GetBookById(int id)
        {
            GetBookByIdModel model = this.booksService.GetBookById(id);
            if (model == null) return NotFound();
            return Ok(model);
        }

        [HttpGet("{authorId}")]
        [Route("author/{authorId:int}")]
        public IActionResult ListBooksByAuthor(int authorId)
        {
            ListModel<ListBooksByAuthorModel> model = this.booksService.ListBooksByAuthor(authorId);
            if (model == null) return NotFound();
            return Ok(model);
        }

        [HttpPost]
        public IActionResult CreateBook([FromForm]CreateBookModel createModel)
        {
            var result = this.booksService.CreateBook(createModel);
            return CreatedAtAction(nameof(GetBookById), result);
        }

        [HttpPut]
        public IActionResult EditBook([FromForm]EditBookModel editModel)
        {
            this.booksService.EditBook(editModel);
            return NoContent();
        }
    }
}