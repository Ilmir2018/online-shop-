import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../shared/interfaces';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.less']
})
export class ProductsPageComponent implements OnInit {

  @Input() product: any

  constructor(private service: ProductService) { }

  ngOnInit(): void {
  }

  addProduct(product: Product){
    this.service.addProduct(product)
  }

}
