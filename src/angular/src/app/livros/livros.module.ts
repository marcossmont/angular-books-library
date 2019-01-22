import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivrosRoutingModule } from './livros-routing.module';
import { ListarComponent } from './listar/listar.component';
import { CriarComponent } from './criar/criar.component';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { MascaraAnoDirective } from '../shared/directives/mascara-ano.directive';
import { RemoverMascarasDirective } from '../shared/directives/remover-mascaras.directive';

@NgModule({
  declarations: [
    ListarComponent, 
    CriarComponent    
  ],
  imports: [
    CommonModule,
    LivrosRoutingModule,
    FormsModule,
    TextMaskModule
  ]
})
export class LivrosModule { }
