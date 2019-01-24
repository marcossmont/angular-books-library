import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { AutoresRoutingModule } from './autores-routing.module';
import { ListarLivrosComponent } from './listar-livros/listar-livros.component';
import { TituloComponent } from '../shared/components/titulo/titulo.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ListarComponent, ListarLivrosComponent],
  imports: [
    CommonModule,
    AutoresRoutingModule,
    SharedModule
  ]
})
export class AutoresModule { }
