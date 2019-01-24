import { Component, OnInit, Input } from '@angular/core';
import { BooksService } from 'src/app/shared/services/books.service';
import { Book } from 'src/app/shared/entities/book';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from 'src/app/shared/entities/author';
import { AuthorsService } from 'src/app/shared/services/authors.service';
import { fieldMasks } from 'src/app/shared/field-masks';
import { AlertsService } from 'src/app/shared/services/alerts.service';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
  private maskYear = fieldMasks.year;
  private selectedAuthor;
  private book:Book = new Book();
  public authors:Author[] = [];
  
  constructor(private booksService:BooksService,
    private authorsService:AuthorsService,
    private alertsService:AlertsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const bookId = params["id"];
      this.booksService.find(bookId).subscribe(
        response => {
          this.book = response;
          this.selectedAuthor = response.author.id;

          this.authorsService.list().subscribe(
            response => {
              this.authors = response;
            }
          );
        }
      );  
    });    
  }

  private edit():void {
    let author = this.authors.find(x => x.id == this.selectedAuthor);
    this.book.author = author;

    this.booksService.edit(this.book).subscribe(
      response => {
        this.alertsService.adicionar("Book edited with success.")
        this.router.navigate(['/books'])
      }
    );
  }

}
