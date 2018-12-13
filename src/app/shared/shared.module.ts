import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverClassDirective } from './hover-class.directive';
export * from './functions';



@NgModule({
  imports: [CommonModule],
  declarations: [HoverClassDirective],
  exports: [HoverClassDirective],

})
export class SharedModule {}
