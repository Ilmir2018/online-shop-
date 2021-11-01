import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.less']
})
export class MainLayoutComponent implements OnInit {

  type = 'Phone'

  constructor(private router: Router, private service: ProductService) { }

  ngOnInit(): void {
  }

  setType(type: string) {
    this.type = type

    if(this.type !== 'Cart'){
      this.router.navigate(['/'], {
        queryParams: {
          type: this.type
        }
      })
    }

    this.service.setType(this.type)
  }

}
