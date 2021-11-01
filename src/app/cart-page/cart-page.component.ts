import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrdersService } from '../services/orders.service';
import { ProductService } from '../services/product.service';
import { Product } from '../shared/interfaces';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.less']
})
export class CartPageComponent implements OnInit {

  cartProducts: Product[] = []
  totalPrice = 0
  form: FormGroup
  submitted = false
  added = ''

  constructor(private productService: ProductService, private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.cartProducts = this.productService.cartProducts
    for (let i = 0; i < this.cartProducts.length; i++) {
      this.totalPrice += +this.cartProducts[i].price
    }
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      payment: new FormControl('Cash')
    })
  }

  submit() {
    if(this.form.invalid) {
      return;
    }

    this.submitted = true

    const order = {
      name: this.form.value.name,
      phone: this.form.value.phone,
      address: this.form.value.address,
      payment: this.form.value.payment,
      price: this.totalPrice,
      orders: this.cartProducts,
      date: new Date()
    }

    this.ordersService.create(order).subscribe(res => {
      this.form.reset()
      this.added = 'Delivery is framed'
      this.submitted = false
    })
  }

  delete(product: Product) {
    this.totalPrice -= +product.price
    this.cartProducts.splice(this.cartProducts.indexOf(product), 1)
  }

}
