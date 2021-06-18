import { ProductsService } from './../../core/services/products.service';
import { Product } from 'src/app/models/products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products?: Product[];
  currentProduct?: Product;
  currentIndex = -1;
  name = '';

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
      console.log(JSON.stringify(data));
    }, error => {
      console.log(error);
    });
  }

  removeAllProducts(): void {
    alert('gonna do yo own apis !?');
  }


  setActiveTutorial(product: Product, index: number): void {
    this.currentProduct = product;
    this.currentIndex = index;
  }

}
