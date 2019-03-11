using bookslibrary.api.domain.Commands.BooksCommands;
using bookslibrary.api.domain.Entities;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Text;

namespace bookslibrary.api.domain.tests.Commands.BooksCommands
{
    [TestClass]
    public class CreateBookCommandTests
    {
        [TestMethod]
        public void CreateBookWithoutName_ShouldBeInvalid()
        {
            CreateBookCommand bookToCreateCommand = new CreateBookCommand(null,
                2019,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                1);

            CreateBookCommandValidator validator = new CreateBookCommandValidator();
            var validationResult = validator.Validate(bookToCreateCommand);

            Assert.IsFalse(validationResult.IsValid);
        }

        [TestMethod]
        public void CreateBookWithoutPublicationYear_ShouldBeInvalid()
        {
            CreateBookCommand bookToCreateCommand = new CreateBookCommand("Lorem ipsum",
                0,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                1);

            CreateBookCommandValidator validator = new CreateBookCommandValidator();
            var validationResult = validator.Validate(bookToCreateCommand);

            Assert.IsFalse(validationResult.IsValid);
        }

        [TestMethod]
        public void CreateBookWithoutAuthorId_ShouldBeInvalid()
        {
            CreateBookCommand bookToCreateCommand = new CreateBookCommand("Lorem ipsum",
                2019,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                0);

            CreateBookCommandValidator validator = new CreateBookCommandValidator();
            var validationResult = validator.Validate(bookToCreateCommand);

            Assert.IsFalse(validationResult.IsValid);
        }

        [TestMethod]
        public void CreateBookWithAllRequiredData_ShouldBeValid()
        {
            CreateBookCommand bookToCreateCommand = new CreateBookCommand("Lorem ipsum",
                2019,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                1);

            CreateBookCommandValidator validator = new CreateBookCommandValidator();
            var validationResult = validator.Validate(bookToCreateCommand);

            Assert.IsTrue(validationResult.IsValid);
        }
    }
}
