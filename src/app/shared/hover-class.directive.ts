import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HoverClassDirective {
  @Input() appHighlight: string;

  // constructor(public elementRef: ElementRef, private renderer: Renderer) { }
  constructor (private el: ElementRef, private renderer : Renderer2){
  private highlight(color: string) {
    console.log('test')
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }

  @HostListener('mouseover') mouseover() {
    this.highlight(this.appHighlight);
  }

  @HostListener('mouseout') mouseout() {
    this.highlight(null);
  }



}
