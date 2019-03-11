using bookslibrary.api.domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace bookslibrary.api.application.Services.BooksService.Models
{
    public class ListAllBooksModel
    {
        public ListAllBooksModel(Book book)
        {
            id = book.Id;
            name = book.Name;
            publicationYear = book.PublicationYear;
        }

        public int id { get; set; }
        public string name { get; set; }
        public int publicationYear { get; set; }
    }
}
