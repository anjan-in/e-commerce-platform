import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Smartphone', price: 20999, imageUrl: 'assets/img/smartphone.jpg', category: 'Electronics' },
    { id: 2, name: 'Headphones', price: 999, imageUrl: 'assets/img/headphones.jpg', category: 'Electronics' },
    { id: 3, name: 'Desktop', price: 10999, imageUrl: 'assets/img/desktop.jpg', category: 'Electronics' },
    { id: 4, name: 'Denim', price: 449, imageUrl: 'assets/img/denim.jpg', category: 'Accessories' },
    { id: 5, name: 'Sneakers', price: 199, imageUrl: 'assets/img/sneakers.jpg', category: 'Fashion' },
    { id: 6, name: 'Backpack', price: 349, imageUrl: 'assets/img/backpack.jpg', category: 'Accessories' }
  ];

  constructor() { }

  getProducts(productId: string): Observable<Product[]> {
    return of(this.products); // Simulating API response with mock data
  }
}
