import { Component } from '@angular/core';
import { Product, ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: string[] = [];
  selectedCategory: string | null = null;
  maxPrice: number = 1000;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.filteredProducts = data;
      this.categories = [...new Set(data.map((product) => product.category))]; // Get unique categories
    });
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.applyFilters();
  }

  applyFilters() {
    this.filteredProducts = this.products.filter((product) =>
      (this.selectedCategory ? product.category === this.selectedCategory : true) &&
      product.price <= this.maxPrice
    );
  }

}
