namespace bookslibrary.api.application.Services.Models.BooksService
{
    public class EditBookModel
    {
        public int id { get; set; }
        public string name { get; set; }
        public int publicationYear { get; set; }
        public string description { get; set; }
        public int authorId { get; set; }
    }
}