using bookslibrary.api.application.Services.AuthorsService.Models;
using bookslibrary.api.application.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace bookslibrary.api.application.Services.AuthorsService
{
    public interface IAuthorsService
    {
        ListModel<ListAllAuthorsModel> ListAllAuthors();
    }
}
