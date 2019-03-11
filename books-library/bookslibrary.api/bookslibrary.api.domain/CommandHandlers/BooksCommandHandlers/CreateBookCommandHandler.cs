using bookslibrary.api.domain.CommandResults.BooksCommandResults;
using bookslibrary.api.domain.Commands.BooksCommands;
using bookslibrary.api.domain.DataServiceIntefaces;
using bookslibrary.api.domain.Entities;

namespace bookslibrary.api.domain.CommandHandlers.BooksCommandHandlers
{
    public class CreateBookCommandHandler : ICommandHandler<CreateBookCommand, CreateBookCommandResult>
    {
        private readonly IDataService dataService;

        public CreateBookCommandHandler(IDataService dataService)
        {
            this.dataService = dataService;
        }

        public CreateBookCommandResult Execute(CreateBookCommand command)
        {
            CreateBookCommandValidator validation = new CreateBookCommandValidator();
            var validationResult = validation.Validate(command);

            if (validationResult.IsValid)
            {
                var author = this.dataService.AuthorsRepository.GetById(command.AuthorId);
                Book book = new Book(command.Name, author, command.PublicationYear, command.Description);
                this.dataService.BooksRepository.Create(book);

                this.dataService.SaveChanges();

                CreateBookCommandResult result = new CreateBookCommandResult(book);
                return result;
            }

            return null;
        }
    }
}
