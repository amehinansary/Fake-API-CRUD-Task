import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/products';

const baseURL = '/products';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor( private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(baseURL);
  }

  getProductById(id: any): Observable<any> {
    return this.http.get(`${baseURL}/${id}`);
  }

  createProduct(data: any): Observable<any> {
    return this.http.post(baseURL, data);
  }

  updateProduct(id: any, data: any): Observable<any> {
    return this.http.put(`${baseURL}/${id}`, data);
  }

  deleteProduct(id: any): Observable<any> {
    return this.http.delete(`${baseURL}/${id}`);
  }

  deleteAllProducts(): Observable<any> {
    return this.http.delete(baseURL);
  }

  findByName(name: any): Observable<Product[]> {
    return this.http.get<Product[]>(`${baseURL}?name=${name}`);
  }
}
