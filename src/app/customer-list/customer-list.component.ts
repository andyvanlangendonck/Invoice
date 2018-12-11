import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { CustomerService } from '../invoice/customer.service';
import { Customer } from '../Shared/customer';

@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
customers: Customer[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    let customer : Customer = {Name: "test", Address:"Test", Telephone:"123"};
    //this.customers.push(customer);
    this.customers.push(customer); 

     //this.customers = this.customerService.getCustomers() ;
      
    }

}
