import { Component } from '@angular/core';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductsComponent {

  products;

  constructor(productService : ProductService){
    this.products = productService.getProducts();
  }

}
