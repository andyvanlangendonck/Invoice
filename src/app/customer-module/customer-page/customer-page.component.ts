import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { handleError } from 'src/app/shared/shared.module';
import { catchError, map, flatMap } from 'rxjs/operators';
import Customer from '../customer';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AddCustomerModalComponent } from '../add-customer-modal/add-customer-modal.component';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit {
  customers$: Observable<Customer[]>;
  activeModal: NgbModalRef;
  @Output() newCustomer = new EventEmitter<Customer>();

  constructor(private http: HttpClient, private modalService: NgbModal) {}

  ngOnInit() {
    this.customers$ = this.getCustomers();
  }

  getCustomers(): Observable<Customer[]> {
    let customers = this.http
      .get<Customer[]>('api/invoice')
      .pipe(catchError(handleError<Customer[]>('getCustomers', [])));

    return customers;
  }

  showAddCustomer() {
    this.activeModal = this.modalService.open(AddCustomerModalComponent); // , { size: 'lg' });
    const modalComponent = this.activeModal.componentInstance as AddCustomerModalComponent;
    modalComponent.newCustomer
      .pipe(map(r => (r as Customer)), flatMap(cust => this.http.post('api/invoice/', cust)))
      .subscribe(theNewCustomer => console.log(theNewCustomer));
  }
}
