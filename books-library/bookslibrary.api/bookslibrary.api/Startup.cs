using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bookslibrary.api.application.Services.AuthorsService;
using bookslibrary.api.application.Services.BooksService;
using bookslibrary.api.data.DataService;
using bookslibrary.api.data.DataService.InMemoryDataService;
using bookslibrary.api.domain.CommandHandlers;
using bookslibrary.api.domain.CommandHandlers.BooksCommandHandlers;
using bookslibrary.api.domain.CommandResults.BooksCommandResults;
using bookslibrary.api.domain.Commands.BooksCommands;
using bookslibrary.api.domain.DataServiceIntefaces;
using bookslibrary.api.Filters;
using FluentValidation;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace bookslibrary.api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc(setupOptions =>
            {
                setupOptions.Filters.Add(typeof(ValidatorActionFilter));
            })
            .AddFluentValidation(options =>
            {
                options.RegisterValidatorsFromAssemblyContaining<Startup>();
            });
            
            services.Configure<ApiBehaviorOptions>(options => options.SuppressModelStateInvalidFilter = true);

            //Application
            services.AddScoped<IBooksService, BooksService>();
            services.AddScoped<IAuthorsService, AuthorsService>();

            //Domain
            services.AddScoped<ICommandHandler<CreateBookCommand, CreateBookCommandResult>, CreateBookCommandHandler>();
            services.AddScoped<ICommandHandler<EditBookCommand, EditBookCommandResult>, EditBookCommandHandler>();
            services.AddTransient<IValidator<CreateBookCommand>, CreateBookCommandValidator>();
            services.AddTransient<IValidator<EditBookCommand>, EditBookCommandValidator>();

            //Infra
            services.AddScoped<IDataService, InMemoryDataService>();

            
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseMvc();
        }
    }
}
