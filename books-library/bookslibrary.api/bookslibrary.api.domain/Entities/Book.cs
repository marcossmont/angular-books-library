using System;
using System.Collections.Generic;
using System.Text;

namespace bookslibrary.api.domain.Entities
{
    public class Book
    {
        public Book(string name, Author author, int publicationYear, string description)
        {
            this.Name = name;
            this.Author = author;
            this.PublicationYear = publicationYear;
            this.Description = description;
        }

        public Book(int id, string name, Author author, int publicationYear, string description)
        {
            this.Id = id;
            this.Name = name;
            this.Author = author;
            this.PublicationYear = publicationYear;
            this.Description = description;
        }

        private Book()
        {

        }

        public int Id { get; private set; }
        public string Name { get; private set; }
        public Author Author { get; private set; }
        public int PublicationYear { get; private set; }
        public string Description { get; private set; }

        public void Update(Book book)
        {
            this.Name = book.Name;
            this.PublicationYear = book.PublicationYear;
            this.Description = book.Description;
            this.Author = book.Author;
        }
    }
}
