import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivrosRoutingModule } from './livros-routing.module';
import { ListarComponent } from './listar/listar.component';
import { CriarComponent } from './criar/criar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListarComponent, CriarComponent],
  imports: [
    CommonModule,
    LivrosRoutingModule,
    FormsModule
  ]
})
export class LivrosModule { }
