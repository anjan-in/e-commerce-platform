import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { Product } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cartItems: Product[] = [];
  totalAmount: number = 0;
  shippingDetails = { name: '', address: '', city: '', zip: '', country: '' };

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items;
      this.totalAmount = this.cartItems.reduce((sum, item) => sum + item.price, 0);
    });
  }

  placeOrder() {
    // Navigate to Order Confirmation page
    this.router.navigate(['/order-confirmation'], {
      state: { cartItems: this.cartItems, totalAmount: this.totalAmount }
    });

    // Clear Cart
    this.cartService.clearCart();
  }

}
