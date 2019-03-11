using bookslibrary.api.domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace bookslibrary.api.application.Services.AuthorsService.Models
{
    public class ListAllAuthorsModel
    {
        public ListAllAuthorsModel(Author author)
        {
            id = author.Id;
            name = author.Name;
            nationality = author.Nationality;
            birthDate = author.BirthDate;
        }

        public int id { get; set; }
        public string name { get; set; }
        public string nationality { get; set; }
        public DateTime birthDate { get; set; }
    }
}
