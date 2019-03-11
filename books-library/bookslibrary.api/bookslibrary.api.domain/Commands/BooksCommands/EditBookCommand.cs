using System;
using System.Collections.Generic;
using System.Text;

namespace bookslibrary.api.domain.Commands.BooksCommands
{
    public class EditBookCommand
    {
        public EditBookCommand(int id,string name, int publicationYear, string description, int authorId)
        {
            Name = name;
            PublicationYear = publicationYear;
            Description = description;
            AuthorId = authorId;
        }

        public int Id { get; private set; }
        public string Name { get; private set; }
        public int PublicationYear { get; private set; }
        public string Description { get; private set; }
        public int AuthorId { get; private set; }
    }
}
