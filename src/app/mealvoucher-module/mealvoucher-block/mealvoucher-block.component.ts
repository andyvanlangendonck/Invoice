import { Component, OnInit, Input } from '@angular/core';
import { MealVoucherBlock } from '../mealVoucherBlock.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mealvoucher-block',
  templateUrl: './mealvoucher-block.component.html',
  styleUrls: ['./mealvoucher-block.component.scss']
})
export class MealVoucherBlockComponent implements OnInit {
  @Input() showColor: boolean;
  tooltip: string;
  
  //deze moet input worden
  mealVoucherBlock: MealVoucherBlock;

  contactPerson: string;

  constructor() { }

  ngOnInit() {
    this.mealVoucherBlock = { id: 1, 
      concernDisplayName: "test", 
      mealVoucherDate: '2018-12-14 16:00:01',
      originDescription: 'origin description content',
      contactPersonEmail: "avl",
      contactPersonMobileNumber: "037778899",
      contactPersonName: "John Doe" };

    //"this.validationBatch.statusTooltip"
    this.tooltip = this.showColor ? "tooltiptext" : null;

    this.contactPerson = this.renderContactPerson(this.mealVoucherBlock);

  }

  edit() {
    //this.validationDialogService.editValidationFile(this.validationBatch);
    console.log("clicked edit");
}


private renderContactPerson(mealVoucherBlock: MealVoucherBlock): string {
  if (!mealVoucherBlock) return null;

  let contactPerson = '';

  if (mealVoucherBlock.contactPersonEmail) {
      contactPerson += `<a href="mailto:${mealVoucherBlock.contactPersonEmail}" data-rel="external"><i class="icon icons8-message"></i></a>`;
  }

  if (mealVoucherBlock.contactPersonMobileNumber) {
      contactPerson += `<a href="tel:${mealVoucherBlock.contactPersonMobileNumber}" data-rel="external"><i class="icon icons8-skype"></i></a>`;
  }

  contactPerson += `<span>${mealVoucherBlock.contactPersonName}</span>`;

  return `<span class="icon-container">${contactPerson}</span>`;
}

//viewEmployers

//viewCalculations

}
