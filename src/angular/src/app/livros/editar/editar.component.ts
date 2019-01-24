import { Component, OnInit, Input } from '@angular/core';
import { LivrosService } from 'src/app/shared/services/livros.service';
import { Livro } from 'src/app/shared/entities/livro';
import { ActivatedRoute, Router } from '@angular/router';
import { Autor } from 'src/app/shared/entities/autor';
import { AutoresService } from 'src/app/shared/services/autores.service';
import { mascaras } from 'src/app/shared/mascaras';
import { AlertasService } from 'src/app/shared/services/alertas.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})

export class EditarComponent implements OnInit {
  private autorSelecionado;
  private mascaraAno = mascaras.ano;
  private livro:Livro = new Livro();
  public autores:Autor[] = [];
  
  constructor(private livrosService:LivrosService,
    private autoresService:AutoresService,
    private alertasService:AlertasService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(parametos => {
      const idDoLivro = parametos["id"];
      this.livrosService.buscarPorId(idDoLivro).subscribe(
        response => {
          this.livro = response;
          this.autorSelecionado = response.autor.id;

          this.autoresService.listarAutores().subscribe(
            response => {
              this.autores = response;
            }
          );
        }
      );  
    });    
  }

  private editar():void {
    let autor = this.autores.find(x => x.id == this.autorSelecionado);
    this.livro.autor = autor;

    this.livrosService.editar(this.livro).subscribe(
      response => {
        this.alertasService.adicionar("Livro editado com sucesso.")
        this.router.navigate(['/livros'])
      }
    );
  }

}
