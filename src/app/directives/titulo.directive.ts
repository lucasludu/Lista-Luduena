import { Directive, ElementRef, Renderer2 } from '@angular/core';



@Directive({
  selector: '[appTitulo]'
})
export class TituloDirective {

  constructor(public elementRef: ElementRef, public rendered: Renderer2) { 

    this.establecerColorTitulo();
    this.establecerDisplay();
    this.centralizarTitulo();

  }


  establecerColorTitulo() {
    this.rendered.setStyle(this.elementRef.nativeElement, 'color', "red");
  }

  establecerDisplay(){
    this.rendered.setStyle(this.elementRef.nativeElement, 'display', 'flex');
  }

  centralizarTitulo() {
    this.rendered.setStyle(this.elementRef.nativeElement, 'justify-content', 'center');
  }

  

}
