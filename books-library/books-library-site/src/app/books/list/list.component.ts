import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/entities/book';
import { BooksService } from 'src/app/shared/services/books.service';
import { Router } from '@angular/router';
import { Action } from 'src/app/shared/classes/action';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public actions:Action[];
  private books:Book[] = [];
  constructor(private booksService:BooksService,
    private router: Router) { }

    
  ngOnInit() {
    this.createActions();

    this.booksService.list().subscribe(
      response => {
        this.books = response;
      }
    );  
  }

  private createActions(): void {
    this.actions = [
      {
        text: "Create",
        cssClass: "btn btn-primary",
        route: "create"
      }
    ]
  }

  private editar(bookId:Number):void {
     this.router.navigate([`/books/edit/${bookId}`])
  }

}
