using bookslibrary.api.data.DataService.InMemoryDataService;
using bookslibrary.api.domain.CommandHandlers;
using bookslibrary.api.domain.CommandHandlers.BooksCommandHandlers;
using bookslibrary.api.domain.CommandResults.BooksCommandResults;
using bookslibrary.api.domain.Commands.BooksCommands;
using bookslibrary.api.domain.DataServiceIntefaces;
using bookslibrary.api.domain.Entities;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace bookslibrary.api.domain.tests.CommandHandlers.BooksCommandHandlers
{
    [TestClass]
    public class CreateBookCommandHandlerTests
    {
        private IDataService dataService;

        public CreateBookCommandHandlerTests()
        {
            IDataService localDataService = new InMemoryDataService();
        }        

        [TestInitialize]
        public void Setup()
        {
            dataService = new InMemoryDataService();
        }

        [TestMethod]
        public void HandleCreateBookWithValidCommand_TheBookShouldBeCreated()
        {
            CreateBookCommand bookToCreateCommand = new CreateBookCommand("Lorem ipsum",
                2019,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                1);

            ICommandHandler<CreateBookCommand, CreateBookCommandResult> commandHandler = new CreateBookCommandHandler(dataService);
            CreateBookCommandResult createBookResult = commandHandler.Execute(bookToCreateCommand);

            List<Book> books = dataService.BooksRepository.ListAll().ToList();
            Book createdBook = books.LastOrDefault();

            Assert.IsNotNull(createdBook);
            Assert.AreEqual(createdBook.Name, bookToCreateCommand.Name);
            Assert.AreEqual(createdBook.Description, bookToCreateCommand.Description);
            Assert.AreEqual(createdBook.PublicationYear, bookToCreateCommand.PublicationYear);
        }

        [TestMethod]
        public void HandleCreateBookWithInvalidCommand_TheBookShouldBeCreated()
        {
            CreateBookCommand bookToCreateCommand = new CreateBookCommand("",
                2019,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                1);

            ICommandHandler<CreateBookCommand, CreateBookCommandResult> commandHandler = new CreateBookCommandHandler(dataService);
            CreateBookCommandResult createBookResult = commandHandler.Execute(bookToCreateCommand);

            List<Book> books = dataService.BooksRepository.ListAll().ToList();
            Book createdBook = books.LastOrDefault();

            Assert.IsNull(createBookResult);
            Assert.IsNotNull(createdBook);
            Assert.AreNotEqual(createdBook.Name, bookToCreateCommand.Name);
            Assert.AreNotEqual(createdBook.Description, bookToCreateCommand.Description);
            Assert.AreNotEqual(createdBook.PublicationYear, bookToCreateCommand.PublicationYear);
        }
    }
}
