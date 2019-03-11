using bookslibrary.api.domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace bookslibrary.api.domain.DataServiceIntefaces.RepositoriesInterfaces
{
    public interface IBooksRepository
    {
        Book GetById(int id);
        IEnumerable<Book> ListAll();
        IEnumerable<Book> ListByAuthor(int authorId);
        Book Create(Book book);
        Book Edit(int id, Book book);
    }
}
