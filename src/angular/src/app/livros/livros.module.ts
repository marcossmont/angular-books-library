import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivrosRoutingModule } from './livros-routing.module';
import { ListarComponent } from './listar/listar.component';
import { CriarComponent } from './criar/criar.component';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { MascaraAnoDirective } from '../shared/directives/mascara-ano.directive';
import { RemoverMascarasDirective } from '../shared/directives/remover-mascaras.directive';
import { EditarComponent } from './editar/editar.component';
import { TituloComponent } from '../shared/components/titulo/titulo.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ListarComponent, 
    CriarComponent, 
    EditarComponent    
  ],
  imports: [
    CommonModule,
    LivrosRoutingModule,
    FormsModule,
    TextMaskModule,
    SharedModule
  ]
})
export class LivrosModule { }
