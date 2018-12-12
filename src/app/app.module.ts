import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SdUiModule } from '@sdworx/sd-components';
import { RouterModule, Route } from '@angular/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { HomeComponent } from './home/home.component';

import { CustomerModule } from './customer-module/customer.module';
import { CustomerPageComponent } from './customer-module/customer-page/customer-page.component';
import { AddCustomerModalComponent } from './customer/add-customer-modal/add-customer-modal.component';

const ROUTES: Route[] = [
  { path: 'invoice', component: HomeComponent },
  { path: 'customer', component: CustomerPageComponent }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, AddCustomerModalComponent],
  imports: [
    BrowserModule,
    NgbModule,
    SdUiModule.forRoot(),
    LoadingBarModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    CustomerModule
  ],
  entryComponents: [AddCustomerModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
