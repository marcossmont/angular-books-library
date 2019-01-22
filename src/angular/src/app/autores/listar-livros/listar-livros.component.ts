import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Autor } from 'src/app/shared/entities/autor';
import { LivrosService } from 'src/app/shared/services/livros.service';
import { Livro } from 'src/app/shared/entities/livro';

@Component({
  selector: 'listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.css']
})
export class ListarLivrosComponent implements OnInit {
  @Input() autor: Autor;
  private livros: Livro[] = []
  
  constructor(private livrosService:LivrosService) { }

  ngOnInit() {
    this.Carregar();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.Carregar();
  }

  public Carregar() {
    this.livrosService.listarLivros().subscribe(
      results => {
        this.livros = results.filter(l => {
          if(l.autor.id == this.autor.id) {
            return l;
          };
      });
    });
  }
}
