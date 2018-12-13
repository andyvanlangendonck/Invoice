import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HoverClassDirective {
  @Input() highlightColor: string;

  // constructor(public elementRef: ElementRef, private renderer: Renderer) { }
  constructor (private el: ElementRef, private renderer : Renderer2){
  }
  private highlight(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }

  @HostListener('mouseover') mouseover() {
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseout') mouseout() {
    this.highlight(null);
  }



}
