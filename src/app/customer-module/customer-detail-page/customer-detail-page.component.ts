import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Customer from '../customer';
import { ActivatedRoute } from '@angular/router';
import { catchError, map, switchMap } from 'rxjs/operators';
import { handleError } from "src/app/shared/shared.module";

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-customer-detail-page',
  templateUrl: './customer-detail-page.component.html',
  styleUrls: ['./customer-detail-page.component.css']
})
export class CustomerDetailPageComponent implements OnInit {
  customer$: Observable<Customer>;
  
  constructor(private http: HttpClient,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
     //uitgebreide manier = als de route langer is dan de id alleen bijv invoice/1/test/blablabla/12345
     this.customer$ = this.activatedRoute.paramMap.pipe(
       map(paramMap => +paramMap.get("id")),
       switchMap(id => this.getCustomer(id))
     );

    //eenvoudige manier
    //this.customer$ = this.getCustomer(+this.activatedRoute.snapshot.paramMap.get('id'));

    //converteer customer observable naar customer
    //let customer: Customer;
    //this.customer$.subscribe(c => (customer = c));
    
  }
  
  getCustomer(id: number): Observable<Customer> {
    let customer = this.http
      .get<Customer>(`api/invoice/${id}/detail`)
      .pipe(catchError(handleError<Customer>("getCustomer")));

    return customer;
  }

}
