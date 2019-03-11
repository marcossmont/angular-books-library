using bookslibrary.api.domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace bookslibrary.api.application.Services.BooksService.Models
{
    public class CreateBookModel
    {
        public string name { get; set; }
        public int publicationYear { get; set; }
        public string description { get; set; }
        public int authorId { get; set; }
    }
}
