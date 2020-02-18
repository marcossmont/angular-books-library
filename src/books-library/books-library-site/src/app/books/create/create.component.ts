import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/entities/book';
import { BooksService } from 'src/app/shared/services/books.service';
import { Author } from 'src/app/shared/entities/author';
import { AuthorsService } from 'src/app/shared/services/authors.service';
import { Router } from "@angular/router"
import { TextMaskModule } from 'angular2-text-mask'
import { fieldMasks } from 'src/app/shared/field-masks'
import { AlertsService } from 'src/app/shared/services/alerts.service';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],

})
export class CreateComponent implements OnInit {

  public maskYear  = fieldMasks.year;

  public book:Book = new Book();
  public authors:Author[] = [];
  public selectedAuthor:Number;

  constructor(private booksService:BooksService, 
    private authorsService:AuthorsService,
    private router: Router,
    private alertsService: AlertsService) { }

  ngOnInit() {
    this.authorsService.list().subscribe(
      response => {
        this.authors = response;
      }
    );
  }

  public create() {
    let author = this.authors.find(x => x.id == this.selectedAuthor);
    this.book.author = author;

    this.booksService.create(this.book).subscribe(
      response => {
        this.alertsService.adicionar("Book added with success.")
        this.router.navigate(['/books'])
      }
    );
  }
}
