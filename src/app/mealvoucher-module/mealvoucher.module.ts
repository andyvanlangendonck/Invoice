import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { mealVoucherRoutes } from './mealvoucher.routes'
import { FormsModule } from '@angular/forms'
import { MealVoucherBlockComponent } from './mealvoucher-block/mealvoucher-block.component';
import { MealvoucherTimeComponent } from './mealvoucher-time/mealvoucher-time.component';
import { MealvoucherBlockTagComponent } from './mealvoucher-block-tag/mealvoucher-block-tag.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(mealVoucherRoutes)
  ],
  declarations: [
    MealVoucherBlockComponent,
    MealvoucherTimeComponent,
    MealvoucherBlockTagComponent
    ],
  providers: [  ]
})
export class MealVoucherModule {}
