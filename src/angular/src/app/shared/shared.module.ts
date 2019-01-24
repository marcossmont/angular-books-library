import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloComponent } from './components/titulo/titulo.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ TituloComponent ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TituloComponent
  ]
})
export class SharedModule { }
