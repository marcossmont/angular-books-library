import { Component, OnInit } from '@angular/core';
import { AuthorsService } from 'src/app/shared/services/authors.service';
import { Author } from 'src/app/shared/entities/author';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private authors:Author[] = [];
  private selectedAuthor:Author;

  constructor(private authorsService:AuthorsService) { }

  ngOnInit() {
    this.authorsService.list().subscribe(
      response => {
        this.authors = response;
      }
    );  
  }

  public select(author:Author) {
    this.selectedAuthor = author;

  }
}
