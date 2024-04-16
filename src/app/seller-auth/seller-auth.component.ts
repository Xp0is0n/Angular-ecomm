import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { signUp } from '../data-type';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent implements OnInit {
  constructor(private seller: SellerService, private router: Router) {}
  showLogin = true;
  authError: string = '';
  ngOnInit(): void {
    this.seller.reloadSeller();
  }
  Login(data: signUp) {
    this.authError = '';
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((error) => {
      if (error) {
        this.authError = 'user email or password is incorrect...';
      }
    });
  }
  signUp(data: signUp) {
    this.seller.userSignUp(data);
  }
  openLogin() {
    this.showLogin = true;
  }
  openSignUp() {
    this.showLogin = false;
  }
}
