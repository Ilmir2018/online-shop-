import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductService } from '../services/product.service';
import { Product } from '../shared/interfaces';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.less']
})
export class ProductPageComponent implements OnInit {

  product$: Observable<any>
  constructor(private service: ProductService, private route: ActivatedRoute) {
    this.product$ = this.route.params
    .pipe(switchMap(params => {
      return this.service.getProduct(params.id)
    }))
   }

  ngOnInit(): void {
  }

  addProduct(product: Product){
    this.service.addProduct(product)
  }

}
