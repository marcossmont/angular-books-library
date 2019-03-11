using bookslibrary.api.domain.DataServiceIntefaces.RepositoriesInterfaces;
using bookslibrary.api.domain.Entities;
using System.Collections.Generic;

namespace bookslibrary.api.data.DataService.InMemoryDataService.Repositories
{
    public class AuthorsRepository : Repository, IAuthorsRepository
    {
        public AuthorsRepository(InMemoryDbContext dbContext) : base(dbContext)
        {
        }

        public Author Create(Author author)
        {
            Author createdAuthor = this.dbContext.Authors.Add(author).Entity;
            return createdAuthor;
        }

        public Author GetById(int id)
        {
            Author author = this.dbContext.Authors.Find(id);
            return author;
        }

        public IEnumerable<Author> ListAll()
        {
            IEnumerable<Author> authors = this.dbContext.Authors;
            return authors;
        }
    }
}
