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
  @Input() customer:  Customer;
  @Output() newCustomer = new EventEmitter<Customer>();
  customerForm = new FormGroup({
      Name: new FormControl('test'),
      Address: new FormControl('test'),
      Telephone: new FormControl('test')
    });

  constructor(public activeModal: NgbActiveModal) { 
  }

  ngOnInit() {
  }

// [disabled]="form.customerForm.invalid"

submitCustomer(){
    this.newCustomer.emit(this.customerForm.value);
  }
}
