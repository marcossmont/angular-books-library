using bookslibrary.api.domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace bookslibrary.api.application.Services.BooksService.Models
{
    public class GetBookByIdModel
    {
        public GetBookByIdModel(Book book)
        {
            this.id = book.Id;
            this.name = book.Name;
            this.publicationYear = book.PublicationYear;
            this.description = book.Description;
        }

        public int id { get; set; }
        public string name { get; set; }
        public int publicationYear { get; set; }
        public string description { get; set; }
    }
}
