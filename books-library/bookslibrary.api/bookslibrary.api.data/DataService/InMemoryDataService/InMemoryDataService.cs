using bookslibrary.api.data.DataService.InMemoryDataService.Repositories;
using bookslibrary.api.domain.DataServiceIntefaces;
using bookslibrary.api.domain.DataServiceIntefaces.RepositoriesInterfaces;
using Microsoft.EntityFrameworkCore;

namespace bookslibrary.api.data.DataService.InMemoryDataService
{
    public class InMemoryDataService : IDataService
    {
        private readonly InMemoryDbContext dbContext;
        public InMemoryDataService()
        {
            var optionsBuilder = new DbContextOptionsBuilder<InMemoryDbContext>();
            var options = optionsBuilder.UseInMemoryDatabase(databaseName: "BooksLibraryInMemotyDatabase").Options;
            this.dbContext = new InMemoryDbContext(options);
            Seeder.Seed(this.dbContext);
        }

        public IAuthorsRepository AuthorsRepository { get => new AuthorsRepository(this.dbContext); }
        public IBooksRepository BooksRepository { get => new BooksRepository(this.dbContext); }

        public void SaveChanges()
        {
            this.dbContext.SaveChanges();
        }
    }
}
