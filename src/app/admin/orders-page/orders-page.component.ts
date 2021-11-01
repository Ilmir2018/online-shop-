import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.less']
})
export class OrdersPageComponent implements OnInit {

  
  orders: any = []
  pSub: Subscription
  rSub: Subscription

  constructor(private service: OrdersService) {}

  ngOnInit(): void {
    this.pSub = this.service.getAll().subscribe(orders => {
      this.orders = orders
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
      this.orders = this.orders.filter((order: any) => order.id !== id)
    })
  }

}
