import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../../Shared/customer';
import { CustomerService } from '../../invoice/customer.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-customer-modal',
  templateUrl: './add-customer-modal.component.html',
  styleUrls: ['./add-customer-modal.component.css']
})
export class AddCustomerModalComponent implements OnInit {
  @Input() customerIn: Customer;
  customer: Customer;

  constructor(public activeModal: NgbActiveModal, private customerService: CustomerService) { 
    //this.customer = this.customerIn;
  }

  ngOnInit() {
  }

// [disabled]="form.customerForm.invalid"

  onSave(){
      return this.customerService.saveCustomer(this.customer) ;
      // .subscribe(app => { 
      //   this.activeModal.close(app);
    // });
  }
}
