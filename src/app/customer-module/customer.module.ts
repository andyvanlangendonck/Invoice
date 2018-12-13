import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { SdUiModule } from '@sdworx/sd-components';
import { AddCustomerModalComponent } from './add-customer-modal/add-customer-modal.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule  } from '@angular/router';
import { CustomerDetailPageComponent } from './customer-detail-page/customer-detail-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, SdUiModule, ReactiveFormsModule, RouterModule, SharedModule],
  declarations: [CustomerListComponent, CustomerPageComponent, AddCustomerModalComponent, CustomerDetailComponent, CustomerDetailPageComponent],
  exports: [CustomerPageComponent, CustomerListComponent],
  entryComponents: [AddCustomerModalComponent],
})
export class CustomerModule {}
