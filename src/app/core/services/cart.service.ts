import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>(this.cartItems);

  constructor() { }

  getCartItems() {
    return this.cartSubject.asObservable();
  }

  addToCart(product: Product) {
    this.cartItems.push(product);
    this.cartSubject.next(this.cartItems);
  }

  removeFromCart(productId: string) {
    this.cartItems = this.cartItems.filter(item => item.id !== Number(productId));
    this.cartSubject.next(this.cartItems);
  }

  clearCart() {
    this.cartItems = [];
    this.cartSubject.next(this.cartItems);
  }

  getCartCount(): number {
    // logic to get the cart count
    return 0; // replace with actual logic
  }
}
