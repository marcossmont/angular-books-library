using bookslibrary.api.application.Models;
using bookslibrary.api.application.Services.AuthorsService.Models;
using bookslibrary.api.domain.DataServiceIntefaces;
using System.Linq;

namespace bookslibrary.api.application.Services.AuthorsService
{
    public class AuthorsService : IAuthorsService
    {
        private readonly IDataService dataService;

        public AuthorsService(IDataService dataService)
        {
            this.dataService = dataService;
        }
        public ListModel<ListAllAuthorsModel> ListAllAuthors()
        {
            var authors = this.dataService.AuthorsRepository.ListAll().ToList();
            if (authors.Count > 0)
            {
                var listAuthorsModels = authors.Select(author => new ListAllAuthorsModel(author));
                ListModel<ListAllAuthorsModel> listModel = new ListModel<ListAllAuthorsModel>(listAuthorsModels);
                return listModel;
            }

            return null;
        }
    }
}
