using bookslibrary.api.domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace bookslibrary.api.domain.DataServiceIntefaces.RepositoriesInterfaces
{
    public interface IAuthorsRepository
    {
        IEnumerable<Author> ListAll();
        Author GetById(int id);
        Author Create(Author author);
    }
}
