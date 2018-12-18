import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';

import { SdUiModule } from '@sdworx/sd-components';

import { ProductPageComponent } from './product-page/product-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutes} from './product.routes';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports:[
    CommonModule,
    SdUiModule,
    ReactiveFormsModule,
    RouterModule.forChild(ProductRoutes)
],
    declarations:[
        ProductPageComponent,
        ProductListComponent
       ],
       exports: [ProductPageComponent,
        ProductListComponent
    ]
})
 export class ProductModule {}