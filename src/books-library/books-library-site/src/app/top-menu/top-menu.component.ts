import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  public  itens = []
  constructor() { }

  ngOnInit() {
    this.itens = [
      {
        title: "Authors",
        url: "authors"
      },
      {
        title: "Books",
        url: "books"
      }
    ]
  }
}
