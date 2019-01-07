import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { LivrosRoutingModule } from './livros-routing.module';

@NgModule({
  declarations: [ListarComponent],
  imports: [
    CommonModule,
    LivrosRoutingModule
  ]
})
export class LivrosModule { }
