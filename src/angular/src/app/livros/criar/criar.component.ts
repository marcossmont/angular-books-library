import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/shared/entities/livro';
import { LivrosService } from 'src/app/shared/services/livros.service';
import { Autor } from 'src/app/shared/entities/autor';
import { AutoresService } from 'src/app/shared/services/autores.service';
import { Router } from "@angular/router"
import { TextMaskModule } from 'angular2-text-mask'
import { mascaras } from 'src/app/shared/mascaras'
import { AlertasService } from 'src/app/shared/services/alertas.service';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css'],

})
export class CriarComponent implements OnInit {

  public mascaraAno  = mascaras.ano;

  public livro:Livro = new Livro();
  public autores:Autor[] = [];
  public autorSelecionado:Number;

  constructor(private livrosService:LivrosService, 
    private autoresService:AutoresService,
    private router: Router,
    private alertasService: AlertasService) { }

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
        this.alertasService.adicionar("Livro adicionado com sucesso.")
        this.router.navigate(['/livros'])
      }
    );
  }
}
