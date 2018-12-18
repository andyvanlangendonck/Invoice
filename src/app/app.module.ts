import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SdUiModule } from '@sdworx/sd-components';
import { RouterModule, Route } from '@angular/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

import { CustomerModule } from './customer-module/customer.module';
import { CustomerPageComponent } from './customer-module/customer-page/customer-page.component';
import { CustomerDetailPageComponent } from './customer-module/customer-detail-page/customer-detail-page.component';

const ROUTES: Route[] = [
  { path: 'invoice', component: HomeComponent },
  { path: 'customer', component: CustomerPageComponent },
  { path: 'customerdetail/:id', component: CustomerDetailPageComponent  },
  { path: 'user', loadChildren: './user-module/user.module#UserModule' },
  { path: 'mealvoucher', loadChildren: './mealvoucher-module/mealvoucher.module#MealVoucherModule' }
];

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    NgbModule,
    SdUiModule.forRoot(),
    LoadingBarModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    CustomerModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
