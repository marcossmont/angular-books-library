import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { AutoresRoutingModule } from './autores-routing.module';
import { ListarLivrosComponent } from './listar-livros/listar-livros.component';

@NgModule({
  declarations: [ListarComponent, ListarLivrosComponent],
  imports: [
    CommonModule,
    AutoresRoutingModule
  ]
})
export class AutoresModule { }
