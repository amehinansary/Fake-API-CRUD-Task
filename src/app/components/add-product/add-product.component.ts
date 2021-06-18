import { Router } from '@angular/router';
import { ProductsService } from './../../core/services/products.service';
import { Product } from './../../models/products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product = {
    id: 0,
    name: '',
    // not best practice but to avoid hard 0
    cost: null,
    quantity: null
  };

  submitted = false;

  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit() {
  }

  saveProduct(): void {
    const data = {
      id: this.product.id,
      name: this.product.name,
      cost: this.product.cost,
      quantity: this.product.quantity
    };

    this.productService.createProduct(data)
      .subscribe(response => {
        console.log(JSON.stringify(response));
        this.submitted = true;
        this.router.navigate(['/products'])

      },
        error => {
          console.log(error);
        });
  }

  newProduct(): void {
    this.submitted = false;
    this.product = {
      name: '',
      cost: 0,
      quantity: 0
    };
  }

}
