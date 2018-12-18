import { Component, OnInit } from '@angular/core';
import { Observable, merge } from 'rxjs';
import Product from '../product';
import { HttpClient } from '@angular/common/http';
import { SdHeaderSearchService } from '@sdworx/sd-components';
import { debounceTime, map, filter, switchMap, catchError, mapTo } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { handleError } from 'src/app/shared/functions';

@Component({
  selector: 'product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  products$ : Observable<Product[]>;
  loading$: Observable<boolean>;

  constructor( private http: HttpClient,
    private search: SdHeaderSearchService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.search.showSearch = true;

    this.products$ = this.route.queryParamMap.pipe(
      //this.loading$ = true,
      debounceTime(250),
      map(pmap => pmap.get(this.search.queryStringParamName)),
      //map(query => query || ""),
      filter(query => !query || query.length == 0 || query.length > 2),
      // tap(query => console.log(query)),
      switchMap(query =>
        this.http.get<Product[]>(`api/product?searchString=${query}`)
      ),
      catchError(handleError<Product[]>('getProducts', []))
    );

    this.loading$ = merge(
      this.route.queryParamMap.pipe(mapTo(true)),
      this.products$.pipe(mapTo(false))
    );


  }

}
