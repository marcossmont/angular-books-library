using bookslibrary.api.domain.CommandResults.BooksCommandResults;
using bookslibrary.api.domain.Commands.BooksCommands;
using bookslibrary.api.domain.DataServiceIntefaces;
using bookslibrary.api.domain.Entities;

namespace bookslibrary.api.domain.CommandHandlers.BooksCommandHandlers
{
    public class EditBookCommandHandler : ICommandHandler<EditBookCommand, EditBookCommandResult>
    {
        private readonly IDataService dataService;

        public EditBookCommandHandler(IDataService dataService)
        {
            this.dataService = dataService;
        }

        public EditBookCommandResult Execute(EditBookCommand command)
        {
            EditBookCommandValidator validation = new EditBookCommandValidator();
            var validationResult = validation.Validate(command);

            if (validationResult.IsValid)
            {
                var author = this.dataService.AuthorsRepository.GetById(command.AuthorId);
                Book book = new Book(command.Name, author, command.PublicationYear, command.Description);
                this.dataService.BooksRepository.Edit(command.Id, book);

                this.dataService.SaveChanges();

                EditBookCommandResult result = new EditBookCommandResult(book);
                return result;
            }

            return null;
        }
    }
}
