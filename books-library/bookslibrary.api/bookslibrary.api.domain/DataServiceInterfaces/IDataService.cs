using bookslibrary.api.domain.DataServiceIntefaces.RepositoriesInterfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace bookslibrary.api.domain.DataServiceIntefaces
{
    public interface IDataService
    {
        IAuthorsRepository AuthorsRepository { get; }
        IBooksRepository BooksRepository { get; }

        void SaveChanges();
    }
}
