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
    // this.productService.getProducts('someProductId').subscribe((data) => {
    //   this.products = data;
    //   this.filteredProducts = data;
    // });

    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts('someProductId').subscribe({
      next: (data) => {
        this.products = data;
        this.filteredProducts = data;
        this.categories = [...new Set(data.map((p) => p.category))]; // Get unique categories
      },
      error: (err) => console.error('Error fetching products:', err)
    });
  }

  filterByCategory(category: string) {
    this.filteredProducts = category
      ? this.products.filter(p => p.category === category && p.price <= this.maxPrice)
      : this.products.filter(p => p.price <= this.maxPrice);
  }

  applyFilters(filters: any) {
    this.filteredProducts = this.products.filter((product) => {
      return (
        (!filters.category || product.category === filters.category) &&
        product.price <= filters.priceRange
      );
    });
  }

  addToCart(product: Product) {
    console.log('Product added to cart:', product);
  }

}
