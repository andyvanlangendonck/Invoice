import { Component, OnInit } from '@angular/core';
import { handleError } from 'src/app/shared/shared.module';
import { catchError } from 'rxjs/operators';
import Customer from '../customer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit {
  customers$: Observable<Customer[]>;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.customers$ = this.getCustomers();
  }

  getCustomers(): Observable<Customer[]> {
    let customers = this.http
      .get<Customer[]>('api/invoice')
      .pipe(catchError(handleError<Customer[]>('getCustomers', [])));

    return customers;
  }
}
