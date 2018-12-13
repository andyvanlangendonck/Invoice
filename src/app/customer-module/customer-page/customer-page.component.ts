import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { handleError } from "src/app/shared/shared.module";
import { catchError, map, flatMap, switchMap, filter, debounceTime, mapTo } from "rxjs/operators";
import Customer from "../customer";
import { Observable, from, merge } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { AddCustomerModalComponent } from "../add-customer-modal/add-customer-modal.component";
import { SdHeaderSearchService } from "@sdworx/sd-components";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-customer-page",
  templateUrl: "./customer-page.component.html",
  styleUrls: ["./customer-page.component.css"]
})
export class CustomerPageComponent implements OnInit {
  customers$: Observable<Customer[]>;
  loading$: Observable<boolean>;
  activeModal: NgbModalRef;
  @Output() newCustomer = new EventEmitter<Customer>();

  constructor(
    private http: HttpClient,
    private modalService: NgbModal,
    private search: SdHeaderSearchService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.search.showSearch = true;

    

    this.customers$ = this.route.queryParamMap.pipe(
      //this.loading$ = true,
      debounceTime(250), 
      map(pmap => pmap.get(this.search.queryStringParamName)),
      //map(query => query || ""),
      filter(query => !query || query.length == 0 || query.length > 2),
      switchMap(query =>
        this.http.get<Customer[]>(`api/invoice?searchString=${query}`)
      ),
      catchError(handleError<Customer[]>('getCustomers', []))
    );

    this.loading$ = merge(this.route.queryParamMap.pipe(mapTo(true)), this.customers$.pipe(mapTo(false)));
  }
  
  


  // getCustomers(searchString: string): Subject<Customer[]> {
  //   console.log("querystring: ", searchString);
  //   let customers = this.http
  //     .get<Customer[]>('api/invoice')
  //     .pipe(catchError(handleError<Customer[]>('getCustomers', []
  //     )
  //     )
  //     );
  //   return customers;
  // }

  showAddCustomer() {
    this.activeModal = this.modalService.open(AddCustomerModalComponent); // , { size: 'lg' });
    const modalComponent = this.activeModal
      .componentInstance as AddCustomerModalComponent;
    modalComponent.newCustomer
      .pipe(
        map(r => r as Customer),
        flatMap(cust => this.http.post("api/invoice/", cust))
      )
      .subscribe(theNewCustomer => console.log(theNewCustomer));
  }
}
