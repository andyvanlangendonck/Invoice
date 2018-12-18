import { Component, OnInit, Input } from '@angular/core';
import { MealVoucherBlock } from '../mealVoucherBlock.model';

@Component({
  selector: 'lpc-mealvoucher-time',
  templateUrl: './mealvoucher-time.component.html',
  styleUrls: ['./mealvoucher-time.component.css']
})
export class MealvoucherTimeComponent implements OnInit {
  @Input() mealVoucherBlock: MealVoucherBlock; 

  constructor() { }

  ngOnInit() {
  }

  viewFileContent() {
    //open dialog
    //this.mealVoucherDialogService.showFileContent(volledig object meegeven);
    console.log("clicked viewFileContent");
  }

}
