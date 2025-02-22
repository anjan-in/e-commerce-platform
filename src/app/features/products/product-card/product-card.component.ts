import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  filteredProducts: Product[] = [];

  ngOnInit() {}

  addToCart(product: Product) {
    // Add your logic to add the product to the cart
    console.log('Product added to cart:', product);
  }

}
