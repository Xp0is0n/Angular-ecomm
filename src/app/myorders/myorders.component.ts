import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { order } from '../data-type';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css'],
})
export class MyordersComponent implements OnInit {
  orderData: order[] | undefined;
  constructor(private product: ProductService) {}

  ngOnInit(): void {
    this.getOrderList();
  }
  cancleOrder(orderId: number | undefined) {
    orderId &&
      this.product.cancleOrder(orderId).subscribe((result) => {
        this.getOrderList();
      });
  }
  getOrderList() {
    this.product.orderList().subscribe((result) => {
      this.orderData = result;
    });
  }
}
