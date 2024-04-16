import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css'],
})
export class SellerHomeComponent implements OnInit {
  productList: undefined | product[];
  productMessege: undefined | string;
  icon = faTrash;
  editicon = faEdit;
  constructor(private product: ProductService) {}
  ngOnInit(): void {
    this.list();
  }
  deleteProduct(id: number) {
    this.product.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.productMessege = 'product is deleted.';
        this.list();
      }
    });
    setTimeout(() => {
      this.productMessege = undefined;
    }, 3000);
  }
  list() {
    this.product.productList().subscribe((result) => {
      console.warn(result);
      this.productList = result;
    });
  }
}
