import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/shared/entities/livro';
import { LivrosService } from 'src/app/shared/services/livros.service';
import { Router } from '@angular/router';
import { Acao } from 'src/app/shared/classes/acao';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  public acoes:Acao[];
  private livros:Livro[] = [];
  constructor(private livrosService:LivrosService,
    private router: Router) { }

    
  ngOnInit() {
    this.criarAcoes();

    this.livrosService.listarLivros().subscribe(
      response => {
        this.livros = response;
      }
    );  
  }

  private criarAcoes(): void {
    this.acoes = [
      {
        texto: "Criar",
        classesCss: "btn btn-primary",
        rota: "criar"
      }
    ]
  }

  private editar(idDoLivro:Number):void {
     this.router.navigate([`/livros/editar/${idDoLivro}`])
  }

}
