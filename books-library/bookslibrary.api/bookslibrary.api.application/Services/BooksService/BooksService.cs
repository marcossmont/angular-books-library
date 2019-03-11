using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using bookslibrary.api.application.Models;
using bookslibrary.api.application.Services.BooksService.Models;
using bookslibrary.api.application.Services.Models.BooksService;
using bookslibrary.api.data.DataService;
using bookslibrary.api.domain.CommandHandlers;
using bookslibrary.api.domain.CommandResults.BooksCommandResults;
using bookslibrary.api.domain.Commands.BooksCommands;
using bookslibrary.api.domain.DataServiceIntefaces;
using bookslibrary.api.domain.Entities;

namespace bookslibrary.api.application.Services.BooksService
{
    public class BooksService : IBooksService
    {
        private readonly IDataService dataService;
        private readonly ICommandHandler<CreateBookCommand, CreateBookCommandResult> createBookCommandHandler;
        private readonly ICommandHandler<EditBookCommand, EditBookCommandResult> editBookCommandHandler;

        public BooksService(IDataService dataService, 
            ICommandHandler<CreateBookCommand, CreateBookCommandResult> createBookCommandHandler,
            ICommandHandler<EditBookCommand, EditBookCommandResult> editBookCommandHandler)
        {
            this.dataService = dataService;
            this.createBookCommandHandler = createBookCommandHandler;
            this.editBookCommandHandler = editBookCommandHandler;
        }

        public CreateBookCommandResult CreateBook(CreateBookModel book)
        {
            CreateBookCommand command = new CreateBookCommand(book.name, book.publicationYear, book.description, book.authorId);
            CreateBookCommandResult result = this.createBookCommandHandler.Execute(command);
            return result;
        }

        public EditBookCommandResult EditBook(EditBookModel book)
        {
            EditBookCommand command = new EditBookCommand(book.id, book.name, book.publicationYear, book.description, book.authorId);
            EditBookCommandResult result = this.editBookCommandHandler.Execute(command);
            return result;
        }

        public GetBookByIdModel GetBookById(int id)
        {
            Book book = dataService.BooksRepository.GetById(id);
            if (book != null)
            {
                GetBookByIdModel bookModel = new GetBookByIdModel(book);
                return bookModel;
            }

            return null;
        }

        public ListModel<ListAllBooksModel> ListAllBooks()
        {
            var books = this.dataService.BooksRepository.ListAll();
            if (books.Count() > 0)
            {
                var listBooksModels = books.Select(book => new ListAllBooksModel(book));
                ListModel<ListAllBooksModel> listModel = new ListModel<ListAllBooksModel>(listBooksModels);
                return listModel;
            }

            return null;
        }

        public ListModel<ListBooksByAuthorModel> ListBooksByAuthor(int authorId)
        {
            var books = this.dataService.BooksRepository.ListByAuthor(authorId);
            if (books.Count() > 0)
            {
                var listBooksModels = books.Select(book => new ListBooksByAuthorModel(book));
                ListModel<ListBooksByAuthorModel> listModel = new ListModel<ListBooksByAuthorModel>(listBooksModels);
                return listModel;
            }

            return null;
        }
    }
}
