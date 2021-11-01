import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.less']
})
export class DashboardPageComponent implements OnInit {

  products: any = []
  pSub: Subscription
  rSub: Subscription
  productName = ''

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.pSub = this.service.getProducts().subscribe(products => {
      this.products = products
    })

  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe()
    }
    if (this.rSub) {
      this.rSub.unsubscribe()
    }
  }

  remove(id: string) {
    this.rSub = this.service.remove(id).subscribe(() => {
      this.products = this.products.filter((product: any) => product.id !== id)
    })
  }

}
