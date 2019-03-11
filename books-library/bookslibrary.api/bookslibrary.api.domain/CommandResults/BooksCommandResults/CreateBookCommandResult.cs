using bookslibrary.api.domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace bookslibrary.api.domain.CommandResults.BooksCommandResults
{
    public class CreateBookCommandResult
    {
        public CreateBookCommandResult(Book book)
        {
            this.Id = book.Id;
            this.Name = book.Name;
            this.PublicationYear = book.PublicationYear;
            this.Description = book.Description;
        }

        public int Id { get; private set; }
        public string Name { get; private set; }
        public int PublicationYear { get; private set; }
        public string Description { get; private set; }
    }
}
