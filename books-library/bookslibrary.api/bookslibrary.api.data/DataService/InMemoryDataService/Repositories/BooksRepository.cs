using bookslibrary.api.domain.DataServiceIntefaces.RepositoriesInterfaces;
using bookslibrary.api.domain.Entities;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace bookslibrary.api.data.DataService.InMemoryDataService.Repositories
{
    public class BooksRepository : Repository, IBooksRepository
    {
        public BooksRepository(InMemoryDbContext dbContext) : base(dbContext)
        {
        }

        public Book Create(Book book)
        {
            Book createdBook = this.dbContext.Books
                .Add(book)
                .Entity;
            return createdBook;
        }

        public Book Edit(int id, Book book)
        {
            Book bookToEdit = this.dbContext.Books.Find(id);
            bookToEdit.Update(book);

            Book editedBook = this.dbContext.Books
                .Update(bookToEdit)
                .Entity;
            return editedBook;
        }

        public Book GetById(int id)
        {
            Book book = this.dbContext.Books.Find(id);
            return book;
        }

        public IEnumerable<Book> ListAll()
        {
            IEnumerable<Book> books = this.dbContext.Books;
            return books;
        }

        public IEnumerable<Book> ListByAuthor(int authorId)
        {
            IEnumerable<Book> books = this.dbContext.Books
                .Include(book => book.Author)
                .Where(book => book.Author.Id == authorId);
            return books;
        }
    }
}
