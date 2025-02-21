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
    { id: 1, name: 'Smartphone', price: 699, imageUrl: 'assets/img/smartphone.jpg', category: 'Electronics' },
    { id: 2, name: 'Headphones', price: 199, imageUrl: 'assets/img/headphones.jpg', category: 'Electronics' },
    { id: 3, name: 'Sneakers', price: 99, imageUrl: 'assets/img/sneakers.jpg', category: 'Fashion' },
    { id: 4, name: 'Backpack', price: 49, imageUrl: 'assets/img/backpack.jpg', category: 'Accessories' }
  ];

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products); // Simulating API response with mock data
  }
}
