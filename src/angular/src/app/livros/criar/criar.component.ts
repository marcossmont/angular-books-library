import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/entities/livro';
import { LivrosService } from 'src/app/services/livros.service';
import { Autor } from 'src/app/entities/autor';
import { AutoresService } from 'src/app/services/autores.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css']
})
export class CriarComponent implements OnInit {

  public livro:Livro = new Livro();
  public autores:Autor[] = [];
  public autorSelecionado:Number;

  constructor(private livrosService:LivrosService, 
    private autoresService:AutoresService,
    private router: Router) { }

  ngOnInit() {
    this.autoresService.listarAutores().subscribe(
      response => {
        this.autores = response;
      }
    );
  }

  public criar() {
    let autor = this.autores.find(x => x.id == this.autorSelecionado);
    this.livro.autor = autor;

    this.livrosService.criar(this.livro).subscribe(
      response => {
        alert("salvo com sucesso.");
        this.router.navigate(['/livros'])
      }
    );
  }
}
