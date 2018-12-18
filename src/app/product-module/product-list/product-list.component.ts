import { Component, OnInit, Input } from '@angular/core';
import Product from '../product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[] = [];

  constructor() { }

  ngOnInit() {
  }

}





