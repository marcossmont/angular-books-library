import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloComponent } from './components/titulo/titulo.component';
import { RouterModule } from '@angular/router';
import { TabelaComponent } from './components/tabela/tabela.component';

@NgModule({
  declarations: [ TituloComponent, TabelaComponent ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TituloComponent
  ]
})
export class SharedModule { }
