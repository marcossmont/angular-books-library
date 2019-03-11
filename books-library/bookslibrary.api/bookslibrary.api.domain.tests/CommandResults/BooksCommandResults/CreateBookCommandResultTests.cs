using bookslibrary.api.domain.CommandResults.BooksCommandResults;
using bookslibrary.api.domain.Entities;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Text;

namespace bookslibrary.api.domain.tests.CommandResults.BooksCommandResults
{
    [TestClass]
    public class CreateBookCommandResultTests
    {
        [TestMethod]
        public void InstatiateCreateBookCommandResult_AllDataShouldBeEquals()
        {
            Author booksAuthor = new Author("Proin Dictum Fringilla", "British", new DateTime(1970, 1, 1));
            Book bookToFillResult = new Book(1, "Lorem Ipsum", booksAuthor, 2019, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");

            CreateBookCommandResult bookCreationResult = new CreateBookCommandResult(bookToFillResult);

            Assert.AreEqual(bookCreationResult.Id, bookToFillResult.Id);
            Assert.AreEqual(bookCreationResult.Name, bookToFillResult.Name);
            Assert.AreEqual(bookCreationResult.Description, bookToFillResult.Description);
            Assert.AreEqual(bookCreationResult.PublicationYear, bookToFillResult.PublicationYear);

        }
    }
}
