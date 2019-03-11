namespace bookslibrary.api.data.DataService.InMemoryDataService.Repositories
{
    public abstract class Repository
    {
        protected readonly InMemoryDbContext dbContext;

        protected Repository(InMemoryDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
    }
}