import { Directive, HostListener } from '@angular/core';
import { NgModel } from '@angular/forms';

declare var $:any;

@Directive({
  selector: '[removerMascaras]',
  providers: [ NgModel ]
})
export class RemoverMascarasDirective {

  @HostListener('click', ['$event']) onClick($event){
    let valoresAtualizados = [];
    $(".campo-mascarado").unmask();

    console.log(this.model);
  }
  
  constructor(public model:NgModel) { }

}
