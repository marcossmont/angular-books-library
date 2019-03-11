using System;

namespace bookslibrary.api.domain.Entities
{
    public class Author
    {
        private Author()
        {

        }
        
        public Author(string name, string nationality, DateTime birthDate)
        {
            this.Name = name;
            this.Nationality = nationality;
            this.BirthDate = birthDate;
        }

        public int Id { get; private set; }
        public string Name { get; private set; }
        public string Nationality { get; private set; }
        public DateTime BirthDate { get; private set; }
    }
}