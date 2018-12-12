import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import Customer from 'src/app/customer-module/customer';
import { CustomerListComponent } from '../customer-list/customer-list.component';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-customer-modal',
  templateUrl: './add-customer-modal.component.html',
  styleUrls: ['./add-customer-modal.component.css']
})
export class AddCustomerModalComponent implements OnInit {
  //customer: Customer;
  //customerForm: FormGroup;
  @Input() customer:  Customer;
  @Output() newCustomer = new EventEmitter<Customer>();
  customerForm = new FormGroup({
      name: new FormControl('test'),
      address: new FormControl('test'),
      telephone: new FormControl('test')
    });
  

  constructor(public activeModal: NgbActiveModal) { 
    
  }

  ngOnInit() {
    //this.customer = <Customer>{};
  }

// [disabled]="form.customerForm.invalid"

submitCustomer(){
    console.log("submit customer", this.customerForm.value);
this.newCustomer.emit(this.customerForm.value);
      //return this.customerService.saveCustomer(this.customer) ;
      // .subscribe(app => { 
      //   this.activeModal.close(app);
    // });
  }
}
