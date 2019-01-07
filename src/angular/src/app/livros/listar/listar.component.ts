import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/livro';
import { LivrosService } from 'src/app/livros.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  private livros:Livro[] = [];
  constructor(private livrosService:LivrosService) { }

  ngOnInit() {
    this.livrosService.listarLivros().subscribe(
      response => {
        this.livros = response;
      }
    );  
  }

}
