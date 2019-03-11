using bookslibrary.api.application.Models;
using bookslibrary.api.application.Services.BooksService.Models;
using bookslibrary.api.application.Services.Models.BooksService;
using bookslibrary.api.domain.CommandResults.BooksCommandResults;
using System;
using System.Collections.Generic;
using System.Text;

namespace bookslibrary.api.application.Services.BooksService
{
    public interface IBooksService
    {
        ListModel<ListBooksByAuthorModel> ListBooksByAuthor(int authorId);
        ListModel<ListAllBooksModel> ListAllBooks();
        GetBookByIdModel GetBookById(int id);
        CreateBookCommandResult CreateBook(CreateBookModel book);
        EditBookCommandResult EditBook(EditBookModel book);
    }
}
