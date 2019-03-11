using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace bookslibrary.api.domain.Commands.BooksCommands
{
    public class EditBookCommandValidator : AbstractValidator<EditBookCommand>
    {
        public EditBookCommandValidator()
        {
            RuleFor(c => c.Id).NotEmpty();
            RuleFor(c => c.Name).NotEmpty();
            RuleFor(c => c.AuthorId).NotEmpty();
            RuleFor(c => c.PublicationYear).NotEmpty();
        }
    }
}
