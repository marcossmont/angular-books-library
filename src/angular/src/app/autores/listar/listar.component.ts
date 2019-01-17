import { Component, OnInit } from '@angular/core';
import { AutoresService } from 'src/app/services/autores.service';
import { Autor } from 'src/app/entities/autor';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  private autores:Autor[] = [];
  private autorSelecionado:Autor;

  constructor(private autoresService:AutoresService) { }

  ngOnInit() {
    this.autoresService.listarAutores().subscribe(
      response => {
        this.autores = response;
      }
    );  
  }

  public selecionar(autor:Autor) {
    this.autorSelecionado = autor;

  }
}
