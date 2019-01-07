import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.css']
})
export class MenuSuperiorComponent implements OnInit {

  public  itens = []
  constructor() { }

  ngOnInit() {
    this.itens = [
      {
        titulo: "Autores",
        url: "autores"
      },
      {
        titulo: "Livros",
        url: "livros"
      }
    ]
  }
}
