import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CustomerListComponent, CustomerPageComponent],
  exports: [CustomerPageComponent]
})
export class CustomerModule {}
