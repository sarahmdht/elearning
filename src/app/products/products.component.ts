import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Product } from '../shared/models/Product';
import { ProductsService } from '../services/product/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule , FormsModule , RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] ;

  constructor(private productService: ProductsService) {
    this.products = productService.getAllProducts();
  }

}
