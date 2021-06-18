import { ProductsService } from './../../core/services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  currentProduct: Product = {
    name: '',
    cost: 0,
    quantity: 0
  };
  message = '';

  constructor( private productService: ProductsService, private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getProduct(this.route.snapshot.params.id);
  }

  getProduct(id: string): void {
    this.productService.getProductById(id).subscribe(data => {
      this.currentProduct = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  updateProduct(): void {
    this.productService.updateProduct(this.currentProduct.id, this.currentProduct).subscribe(response => {
          console.log(response);
          this.currentProduct.name = response.name;
          this.currentProduct.cost = response.cost;
          this.currentProduct.quantity = response.quantity;
          this.router.navigate(['/products']);
        }, error => {
          console.log(error);
        });
  }

  deleteProduct(): void {
    this.productService.deleteProduct(this.currentProduct.id).subscribe(response => {
          console.log(response);
          this.router.navigate(['/products']);
        }, error => {
          console.log(error);
        });
  }
}
