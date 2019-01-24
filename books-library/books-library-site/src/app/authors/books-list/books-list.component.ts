import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Author } from 'src/app/shared/entities/author';
import { BooksService } from 'src/app/shared/services/books.service';
import { Book } from 'src/app/shared/entities/book';

@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  @Input() author: Author;
  private books: Book[] = []
  
  constructor(private booksService:BooksService) { }

  ngOnInit() {
    this.loadBooks();
  }

  ngOnChanges() {
    this.loadBooks();
  }

  public loadBooks() {
    this.booksService.list().subscribe(
      results => {
        this.books = results.filter(book => {
          if(book.author.id == this.author.id) {
            return book;
          };
      });
    });
  }
}
