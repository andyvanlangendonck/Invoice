import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../Shared/customer';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class CustomerService   {
 
    constructor(private http: HttpClient){}

getCustomers () : Observable<Customer[]> {
    let customers = this.http.get<Customer[]>('api/invoice')
        .pipe(catchError(this.handleError<Customer[]>('getCustomers', [])));
        
        return customers;
}

private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

}