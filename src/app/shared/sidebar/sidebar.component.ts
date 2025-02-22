import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  categories: string[] = ['Electronics', 'Clothing', 'Books', 'Home Appliances'];
  selectedCategory: string = '';
  priceRange: number = 500;

  @Output() filterChanged = new EventEmitter<any>();

  filterProducts() {
    this.filterChanged.emit({
      category: this.selectedCategory,
      priceRange: this.priceRange
    });
  }

  resetFilters() {
    this.selectedCategory = '';
    this.priceRange = 500;
    this.filterProducts();
  }

}
