import { Directive, ElementRef, Renderer, AfterViewInit, ChangeDetectorRef, ApplicationRef } from '@angular/core';

declare var $:any;

@Directive({
  selector: 'input[mascaraAno]'
})
export class MascaraAnoDirective implements AfterViewInit {
  ngAfterViewInit(): void {
    $(`#${this._elementRef.nativeElement.id}`).mask("99-99");
    this._renderer.setElementClass(this._elementRef.nativeElement, "campo-mascarado", true);
  }  

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer)
  {
        
  } 
}
