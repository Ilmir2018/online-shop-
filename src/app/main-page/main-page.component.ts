import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit {

  products$: Observable<any>

  constructor(public service: ProductService) { 
    this.products$ = this.service.getProducts()
  }

  ngOnInit(): void {
  }

}
